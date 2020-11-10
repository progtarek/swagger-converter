'use strict';
const fs = require('fs');

const payload = require('./payload.json');

function index(obj, is, value) {
  try {
    if (typeof is == 'string') return index(obj, is.split('.'), value);
    else if (is.length == 1 && value !== undefined) return (obj[is[0]] = value);
    else if (is.length == 0) return obj;
    else return index(obj[is[0]], is.slice(1), value);
  } catch (error) {
    return null;
  }
}

const getEntries = (o, prefix = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    Object(v) === v ? getEntries(v, `${prefix}${k}.`) : [[`${prefix}${k}`, v]]
  );

const output = Object.fromEntries(getEntries(payload));

const updatePath = (path) => {
  let arr = [];
  for (const item of path) {
    arr.push(item);
    arr.push('properties');
  }
  return arr;
};
let final = {};

const convertPayload = () => {
  for (const key in output) {
    const items = key.split('.');

    for (let i = 0; i < items.length; i++) {
      const path = items.slice(0, i);
      const obj = path.length
        ? index(final, updatePath(path))
        : path.length
        ? index(final, path)
        : null;

      if (items.length === 1) {
        final[items[i]] = {};
        final[items[i]].type = typeof output[key];
        final[items[i]].example = output[key];
      } else if (obj) {
        if (items.length === i + 1) {
          obj[items[i]] = {};
          obj[items[i]].type = typeof output[key];
          obj[items[i]].example = output[key];
        } else {
          if (!obj[items[i]]) {
            obj[items[i]] = {};
            obj[items[i]].type = 'object';
            obj[items[i]].properties = {};
          }
        }
      } else if (!obj) {
        if (!final[items[i]]) {
          final[items[i]] = {};
          final[items[i]].type = 'object';
          final[items[i]].properties = {};
        }
      }
    }
  }
};

convertPayload();
let data = JSON.stringify(final);

fs.writeFileSync('output.json', data);
