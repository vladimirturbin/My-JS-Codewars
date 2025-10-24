const sumStrings = require('../solution'); // Import your solution
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sumStrings('123','456'),'579')
  });
});
