// tests if an actual result is equivalent to an expected result
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`) :
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
};


module.exports = assertEqual;