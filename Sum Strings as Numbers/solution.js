function sumStrings(a,b) {
    let resultLen = a.length > b.length ? a.length : b.length;
    let result = '';
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let inMemory = 0;
    for (let i=0; i<resultLen; i++) {
      let decResult;
      if (a[i] && b[i]) {
        decResult = parseInt(a[i]) + parseInt(b[i]) + inMemory;
      } else if (a[i]) {
        decResult = parseInt(a[i]) + inMemory;        
      } else if (b[i]) {
        decResult = parseInt(b[i]) + inMemory;
      }
      if (decResult > 9) {
        decResult -= 10;
        inMemory = 1;
      } else {
        inMemory = 0
      }
      result += decResult
    }
    if (inMemory != 0) {
      result += inMemory
    }

    result = result.split('').reverse().join('');
    while (result[0] === '0') {
      result = result.slice(1);
    }
    return result;
  }

  module.exports = sumStrings;
