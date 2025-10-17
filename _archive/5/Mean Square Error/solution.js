function solution(firstArray, secondArray) {
  let result = 0;
  for (i=0; i<firstArray.length; i++) {
      result += (firstArray[i] - secondArray[i]) ** 2;
    }
    result /= firstArray.length;
    
    return result;
  }

  module.exports = solution;
