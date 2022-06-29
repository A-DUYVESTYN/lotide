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
  if (eqArrays(actual, expected)) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }

};

//takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arr) {
  const flatArr = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      i.forEach(element => {
        flatArr.push(element);
      });
    } else {
      flatArr.push(i);
    }
  }
  return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
