const maskify = require('../solution'); // Import your solution
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("maskify", function(){
  it("should work for some examples", function(){
    assert.strictEqual(maskify('4556364607935616'), '############5616');
    assert.strictEqual(maskify('1'), '1');
    assert.strictEqual(maskify('11111'), '#1111');
  });
});