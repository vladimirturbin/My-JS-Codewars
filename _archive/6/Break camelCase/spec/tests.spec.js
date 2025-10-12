const solution = require('./../solution'); // Import your solution
const { assert } = require("chai");

describe("Sample tests", () => {
  it("Sample test 1", () => {
    assert.strictEqual(solution(""), "", `solution("")`);
  });
  it("Sample test 2", () => {
    assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
  });
  it("Sample test 3", () => {
    assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);
  });
});