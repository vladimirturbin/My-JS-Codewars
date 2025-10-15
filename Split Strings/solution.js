function solution(str) {
    let result = [];
    for (i=0; i < (str.length/2); i++) {
      let slice = str.slice(i*2, i*2+2);
      if (slice.length === 1) {
        slice = slice + '_'
      }
      result.push(slice);
    } 
  // Paste your code here
    return result;
  }

  module.exports = solution;
