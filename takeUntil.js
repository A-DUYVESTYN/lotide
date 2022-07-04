// outputs the given array until the callback provided returns a truthy value on that element. if never true, returns the origianl array

const takeUntil = function (array, callback) {
  const output = []
  for (const element of array) {
    if (callback(element)) {
      return output
    }
    output.push(element)
  };
  return output
}

module.exports = takeUntil;

// TEST CASES
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

/* Expected output
[ 1, 2, 5, 7, 2 ]
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

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

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);