// tests if an actual result is equivalent to an expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }
};

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

  if (Object.keys(object1).length !== Object.keys(object2).length) {
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

// TEST CASES FOR NON_NESTED OBJECTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false

// const cd3 = { c: "1", d: "55" };
// assertEqual(eqObjects(cd, cd3),false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false) // => false
assertEqual(eqObjects({ a: { y: 0, z: { yup: {yessir: 5}, nah: 3} }, b: 2 }, { a: { y: 0, z: { yup: {yessir: 5}, nah: 3} }, b: 2 }),true) // => true
assertEqual(eqObjects({ a: { y: { p: 54 }, z: 1 }, b: 2 }, { a: { y: { p: 54}, z: 1 }, b: 2 }),true) // => true