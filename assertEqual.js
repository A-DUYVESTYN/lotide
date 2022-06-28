
// tests if an actual result is equivalent to an expected result
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🚩️🚩️🚩️Assertion failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual("sss", "sss");
assertEqual(1, "1");