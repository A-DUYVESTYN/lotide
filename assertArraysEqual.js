// function returns true if two arrays are equal
// the result of checking each element is stored in equalArr
const eqArrays = function (arr1, arr2) {
  let equalArr = []
  for (const i of arr1) {
    (arr1[i] === arr2[i]) ? equalArr[i] = true : equalArr[i] = false;
  }
  if (equalArr.includes(false)) {
    return false
  }
  return true
}

// tests if an actual array result is equivalent to an expected result. does not work for non-arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }

};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
