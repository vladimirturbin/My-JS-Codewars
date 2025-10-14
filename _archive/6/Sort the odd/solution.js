console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))

function sortArray(array) {
    let result = array;
    let oddArray = [];
    let arrayOfOddIndexes = [];
    for (i=0; i < array.length;i++)
      if(array[i] % 2 != 0) {
        oddArray.push(array[i]);
        arrayOfOddIndexes.push(i);
      }
    
    oddArray.sort((a, b) => a - b);
    for (i=0; i < oddArray.length; i++) {
      result[arrayOfOddIndexes[i]] = oddArray[i]
    }
    return result;
  }

  module.exports = sortArray;
