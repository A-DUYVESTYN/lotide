// tests if an actual result is equivalent to an expected result


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

module.exports = eqArrays;
