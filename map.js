// function returns true if two arrays are equal
// the result of checking each element is stored in equalArr
const eqArrays = function(arr1, arr2) {
  let maxLength = Math.max(arr1.length,arr2.length)
  let equalArr = [];
  for (let i = 0; i < maxLength; i++) {
    (arr1[i] === arr2[i]) ? equalArr[i] = true : equalArr[i] = false;
  }
  if (equalArr.includes(false)) {
    return false;
  }
  return true;
};

// tests if an actual array result is equivalent to an expected result. does not work for non-arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("✅️✅️✅️Assertion passed: ", actual," === ", expected);
  } else {
    console.log("🚩️🚩️🚩️Assertion failed: ", actual," !== ", expected);
  }
};

// custom map function
const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
const arr2 = [123, "control", "to", "major", "tom"];
const arr3 = [[1,2,3], "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(arr2, word => word[0]), [ undefined, 'c', 't', 'm', 't' ]);
assertArraysEqual(map(arr3, word => word[0]), [ 1, 'c', 't', 'm', 't' ]);

// const results1 = map(words, word => word[0]);
// console.log(results1);