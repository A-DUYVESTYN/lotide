// function returns true if two arrays are equal
// the result of checking each element is stored in equalArr
const eqArrays = function (arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length)
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

// returns an object of all indices (zero-based positions) in the string where each character is found
const letterPositions = function (sentence) {
  const results = {};
  const noSpaces = sentence.split(' ').join('')
  for (const index in noSpaces) {
    element = noSpaces[index]

    if (!results[element]) {
      results[element] = [index]
    } else {
      results[element].push(index)
    }
  }
  return results;
};
console.log(letterPositions("hello"))

const result1 = letterPositions("hello")

assertArraysEqual(result1["h"], [0])
assertArraysEqual(result1["l"], [2, 3])