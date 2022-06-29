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
    // console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
    console.log("✅️✅️✅️Assertion passed: ",actual," === ",expected);
  } else {
    console.log("✅️✅️✅️Assertion passed: ",actual," === ",expected);
  }

};

const middle = function(arr) {
  const outputArr = []
  const midIndex = Math.floor(arr.length/2); //returns the 
    
  if (arr.length <= 2) { 
  }
  else if (arr.length % 2 !== 0) {
    outputArr.push(arr[midIndex])
  }
  else if (arr.length % 2 === 0) {
    outputArr.push(arr[midIndex-1])
    outputArr.push(arr[midIndex])
  }

  return outputArr
}

assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1, 2]),[]) // => []
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]) // => [3, 4]