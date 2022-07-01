// tests if an actual result is equivalent to an expected result
const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`) :
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
};

// function returns true if two arrays are equal. Can handle nested arrays using recursion
// the result of checking each element is stored in equalArr
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false
      }
    } else if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};

// TEST CASES
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [[4]]], [[2, 3], [[4]]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

// TEST CASES FOR NON-NESTED ARRAYS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
