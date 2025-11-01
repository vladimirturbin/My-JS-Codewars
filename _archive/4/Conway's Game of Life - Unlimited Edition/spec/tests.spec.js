const getGeneration = require('./../solution'); // Import your solution
describe('Sample tests', function () {

  const chai = require('chai'), { fail, deepEqual } = chai.assert;
  chai.config.truncateThreshold = 0;

  function doTest(input, generations, expected) {
    const inputCopy = input.map(row => row.slice());
    const actual = getGeneration(inputCopy, generations);
    if (!Array.isArray(actual) || !actual.every(Array.isArray))
        fail('you must return a 2D array, but you returned: ' + actual);
 
    const message =
      `for universe:\n${htmlize(input)}\nafter ${generations} generations,` +
      ` expected:\n${htmlize(expected)}\n but got:\n${htmlize(actual)}\n\n`
     ;
    deepEqual(actual, expected, message);
    deepEqual(inputCopy, input, '\n=== DO NOT MUTATE THE INPUT MATRIX ! ===\n');
  }

  it('Single Glider \n', function () {
    doTest([
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0]
    ], 2, [
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ]);
  });
});