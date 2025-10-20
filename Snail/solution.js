snail = function(array) {
  let iLowest = 0;
  let jLowest = 0;
  let iHighest = array.length;
  let jHighest = array[0].length;
  let result = []
  let i = 0;
  let j = 0;
  do {
    result.push(array[i][j])
    // going right
    if ((i == iLowest) && (j != jHighest)) j++;
    // in top right corner
    if ((i == iLowest) && ())
  } while ((iHighest != iLowest) && (jHighest != jLowest))
}

  module.exports = snail;
