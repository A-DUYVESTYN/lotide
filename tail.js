const assertEqual = require('./assertEqual')

// returns array with first element removed
const tail = function(arr) {
  return arr.slice(1);
};

// assert function with pass/fail emoji graphics
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
//   }
//   if (actual !== expected) {
//     console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
//   }

// };

module.exports = tail