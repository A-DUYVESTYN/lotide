const eqArrays = require('./eqArrays')

// tests if an actual array result is equivalent to an expected result. does not work for non-arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("✅️✅️✅️Assertion passed: ", actual," === ", expected);
  } else {
    console.log("🚩️🚩️🚩️Assertion failed: ", actual," !== ", expected);
  }
};

module.exports = assertArraysEqual;


// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);