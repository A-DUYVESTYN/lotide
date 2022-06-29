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
// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {

  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false
  }
  for (const key of Object.keys(object1)) {
    //checks both objects if the current key's value is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //compare arrays and returns false if unequal
      if (!eqArrays(object1[key],object2[key])) {
        return false
      }
    } else {
      // if not arrays, assume the current key's value are primatives
      if (!(object1[key] === object2[key])) {
        return false
      }
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
