// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  })
});



// // test case for array using a loop (assertEqual does not currently handle arrays)
// const result = tail([1,2,3]);
// const expected = [2,3];
// for (let i = 0; i < result.length; i++) {
//   assertEqual(result[i],expected[i]);
  
// }

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!