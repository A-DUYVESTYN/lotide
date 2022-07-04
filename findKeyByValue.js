// tests if an actual result is equivalent to an expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }
};


// takes in an object and a value. returns the first key of the object which contains the given value
const findKeyByValue = function(obj,val) {
  for (const i in obj) {
    if (obj[i] === val) {
      return i
    }
  }
}

module.exports = findKeyByValue;

// TEST CASE
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, 22), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");