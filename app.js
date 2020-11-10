// 'use strict';
// const fs = require('fs');

// function index(obj, is, value) {
//   if (typeof is == 'string') return index(obj, is.split('.'), value);
//   else if (is.length == 1 && value !== undefined) return (obj[is[0]] = value);
//   else if (is.length == 0) return obj;
//   else return index(obj[is[0]], is.slice(1), value);
// }

// const payload = {
//   type: 'SUCCESS',
//   payload: {
//     docs: [
//       {
//         _id: '5d4af452fcce70001a5ba048',
//         name: {
//           en: 'Tassa',
//           ar: 'طاسة',
//         },
//         branchName: {
//           ar: 'سموحة',
//           en: 'Smouha',
//         },
//         categories: [
//           {
//             _id: '5bb386cd2e2979000f917ad7',
//             name: {
//               en: 'Restaurants & Cafe',
//               ar: 'المطاعم والمقاهي',
//             },
//           },
//         ],
//         placeProfilePictureUrl:
//           'https://media.qurba-dev.com/profile_1565192413573.jpeg',
//       },
//     ],
//     total: 9,
//     limit: 10,
//     page: 1,
//     pages: 1,
//   },
// };

// let final = {};
// let path = [];
// let depth = 0;

// const convertPayload = (payload) => {
//   Object.keys(payload).forEach((key) => {
//     if (payload[key] != null && payload[key].constructor.name === 'Object') {
//       depth++;
//       if (path && path.length) {
//         const obj = index(final, path);

//         obj[key] = {};
//         obj[key].type = 'object';
//         obj[key].properties = {};
//       } else {
//         final[key] = {};
//         final[key].type = 'object';
//         final[key].properties = {};
//       }
//       path.push(key);
//       path.push('properties');

//       convertPayload(payload[key]);
//     } else if (Array.isArray(payload[key])) {
//       depth++;
//       if (path && path.length) {
//         const obj = index(final, path);
//         obj[key] = {};
//         obj[key].type = 'array';
//         obj[key].items = {};
//       } else {
//         final[key] = {};
//         final[key].type = 'array';
//         final[key].items = {};
//       }

//       path.push(key);
//       path.push('items');
//       convertPayload(payload[key], key);
//     } else if (
//       typeof payload[key] == 'string' ||
//       typeof payload[key] == 'number'
//     ) {
//       console.log('==================================');
//       console.log('path ', path);
//       console.log('key ', key);
//       console.log('depth ', depth);
//       console.log('==================================');
//       if (path && path.length) {
//         const obj = index(final, path);

//         obj[key] = {
//           type: typeof payload[key],
//           example: payload[key],
//         };
//       } else {
//         final[key] = {
//           type: typeof payload[key],
//           example: payload[key],
//         };
//       }
//     }
//   });

//   return final;
// };

// let output = convertPayload(payload);
// let data = JSON.stringify(output);

// fs.writeFileSync('res.json', data);

'use strict';
const fs = require('fs');

const payload = {
  type: 'SUCCESS',
  payload: {
    docs: [
      {
        _id: '5d4af452fcce70001a5ba048',
        name: {
          en: 'Tassa',
          ar: 'طاسة',
        },
        branchName: {
          ar: 'سموحة',
          en: 'Smouha',
        },
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/profile_1565192413573.jpeg',
      },
      {
        _id: '5e564ace21dcc3001414f05f',
        name: {
          en: 'Tipas',
          ar: 'طيباس',
        },
        branchName: {
          en: 'Camp Cesar',
          ar: 'كامب شيزار',
        },
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/places/profile/51_1582713452399.png',
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
      },
      {
        _id: '5e54f3d621dcc3001414eff2',
        name: {
          en: 'Crisp',
          ar: 'كريسب',
        },
        branchName: {
          en: 'Smouha',
          ar: 'سموحة',
        },
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/places/profile/64_1582625404651.png',
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
      },
      {
        _id: '5e8b9014674cbb00123391ee',
        name: {
          en: 'Crepe club',
          ar: 'كريب كلوب',
        },
        branchName: {
          en: 'Sporting',
          ar: 'سبورتنج',
        },
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/places/profile/1_1586204170758.png',
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
      },
      {
        _id: '5d4af452fcce70001a5ba048',
        name: {
          en: 'Tassa',
          ar: 'طاسة',
        },
        branchName: {
          ar: 'سموحة',
          en: 'Smouha',
        },
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/profile_1565192413573.jpeg',
      },
      {
        _id: '5d4af452fcce70001a5ba048',
        name: {
          en: 'Tassa',
          ar: 'طاسة',
        },
        branchName: {
          ar: 'سموحة',
          en: 'Smouha',
        },
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/profile_1565192413573.jpeg',
      },
      {
        _id: '5c76d9c9618a650017ee5d95',
        name: {
          en: 'The Q Community',
          ar: 'كيو كوميونيتي',
        },
        branchName: {
          en: 'Saba Basha',
          ar: 'سابا باشا',
        },
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/profile_1561741381489.jpeg',
      },
      {
        _id: '5e54f3d621dcc3001414eff2',
        name: {
          en: 'Crisp',
          ar: 'كريسب',
        },
        branchName: {
          en: 'Smouha',
          ar: 'سموحة',
        },
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/places/profile/64_1582625404651.png',
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
      },
      {
        _id: '5e54f3d621dcc3001414eff2',
        name: {
          en: 'Crisp',
          ar: 'كريسب',
        },
        branchName: {
          en: 'Smouha',
          ar: 'سموحة',
        },
        placeProfilePictureUrl:
          'https://media.qurba-dev.com/places/profile/64_1582625404651.png',
        categories: [
          {
            _id: '5bb386cd2e2979000f917ad7',
            name: {
              en: 'Restaurants & Cafe',
              ar: 'المطاعم والمقاهي',
            },
          },
        ],
      },
    ],
    total: 9,
    limit: 10,
    page: 1,
    pages: 1,
  },
};

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

      // else if (items.length === i + 1) {
      //   final[items[i]] = {};
      //   final[items[i]].type = typeof output[key];
      //   final[items[i]].example = output[key];
      // }
    }
  }
};

convertPayload();
let data = JSON.stringify(final);

fs.writeFileSync('res.json', data);
