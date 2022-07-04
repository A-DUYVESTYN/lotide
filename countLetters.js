// tests if an actual result is equivalent to an expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }
};
// counts letters in an input string and outputs an object of counts. ignores whitespace.
const countLetters = function (str) {
  const noSpaces = str.split(' ').join('')
  const outputObj = {}
  for (const i of noSpaces) {
    !outputObj[i] ? outputObj[i] = 1 : outputObj[i] ++
  }
  return outputObj
}

// TEST CASE
// console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;