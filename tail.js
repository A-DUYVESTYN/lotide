// returns array with first element removed
const tail = function(arr) {
  return arr.slice(1);
};

// assert function with pass/fail emoji graphics
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }

};

// test case for array usign a loop (assertEqual does not currently handle arrays)
const result = tail([1,2,3]);
const expected = [2,3];
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i],expected[i]);
  
}

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!