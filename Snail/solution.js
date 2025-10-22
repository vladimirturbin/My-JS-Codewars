snail = function(array) {
  let iLowest = 0;
  let jLowest = 0;
  let iHighest = array.length - 1;
  let jHighest = array[0].length - 1;
  let result = []
  let i = 0;
  let j = 0;

  // empty argument case
  if ((iHighest == 0) && (jHighest == -1)) {
    return result;
  }
  // single element case
  if ((iHighest == 0) && (jHighest == 0)) {
    return array[0];
  }
  // other (square) case
  do {
    result.push(array[i][j])
    // going right
    if ((i == iLowest) && (j != jHighest)) {
      j++
      // if in top right corner 
      if ((i == iLowest) && (j == jHighest)) {
        result.push(array[i][j])
        i++;
        iLowest++;
      }
    } 
    // Going down
    else if ((i != iHighest) && ( j == jHighest)) {
      i++;
      // if in bottom right corner
      if ((i == iHighest) && (j == jHighest)) {
        result.push(array[i][j])
        j--;
        jHighest--;
      }      
    }
    // Going left
    else if ((i == iHighest) && (j != jLowest)) {
      j--
      // if in bottom left corner 
      if ((i == iHighest) && (j == jLowest)) {
        result.push(array[i][j])
        i--;
        iHighest--;
      }
    }
    // Going up
    else if ((i != iLowest) && ( j == jLowest)) {
      i--;
      // if in top left corner
      if ((i == iLowest) && (j == jLowest)) {
        result.push(array[i][j])
        j++;
        jLowest++;
      }      
    }
  } while ((iHighest >= iLowest) && (jHighest >= jLowest))

  return result;
}

module.exports = snail;
