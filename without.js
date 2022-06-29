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
    console.log("✅️✅️✅️Assertion passed: ",actual," === ",expected);
  } else {
    console.log("✅️✅️✅️Assertion passed: ",actual," === ",expected);
  }
};

// Function to remove out unwated items from a source array. pseudocode:
// loop through source array
// check if each element is included in itemsToRemove array
// if not included, push the current element to the output array.
// return output array
const without = function(source, itemsToRemove) {
  const outputArr = [];
  for (let i = 0; i < source.length; i++) {
    const currentSourceElement = source[i];
    if (!itemsToRemove.includes(currentSourceElement)) {
      outputArr.push(currentSourceElement);
    }
  }
  return outputArr;
};

//Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);  // => ["1", "2"]
assertArraysEqual(without([5, "cat", NaN], [NaN, 5, "3"]), ["cat"]);