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
// Returns true if both objects have identical keys with identical values. Can handle nested objects using recursion
const eqObjects = function (object1, object2) {
  // check if # of keys are the same, if not return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (const key of Object.keys(object1)) {
    const val1 = object1[key]
    const val2 = object2[key]
    //checks both objects if the current key's value is an array. if so, compare arrays and return false if unequal
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false
      }
      // after checking they are not arrays, check if both values are objects and not null, if so, use recursion to check if objects are equal, return false if unequal
    } else if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
      if (!eqObjects(val1, val2)) {
        return false
      }
      // if not objects, arrays, or null, assume the current key's values are primatives
    } else if (val1 !== val2) {
      return false
    }
  }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  // const inspect = require('util').inspect; // Optionaly (commented out) the util library can be used to allow logging object into template literals using the inspect function to avoid '[object Object]'

  if (eqObjects(actual,expected)) {
    console.log("✅️✅️✅️Assertion passed: ", actual," === ", expected);
    // console.log(`✅️✅️✅️Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log("🚩️🚩️🚩️Assertion failed: ", actual," !== ", expected);
    // console.log(`🚩️🚩️🚩️Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2); // => fail
