getGeneration([
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0]
    ], 2);

/**
 * @param {Array} cells - inital map of cells in 2D array form 
 * @param {Number} generations - positive number of generations will pass
 */
function getGeneration(cells, generations) {
  let generationInit = cells;
  let generationResult = [];

  for (let g=0; g<generations; g++) {
    // add 0s padding to initial array
    const iMax = generationInit.length + 1;
    const jMax = generationInit[0].length + 1;
    
    for (let i=0; i<generationInit.length; i++) {
      generationInit[i] = [0, ...generationInit[i], 0]
    }
    const zeroLine = Array(jMax+1).fill(0);
    generationInit = [zeroLine, ...generationInit, zeroLine];

    //generate empty result array
    generationResult = Array(iMax+1)
    for (let i=0; i <= iMax; i++) {
      generationResult[i] = Array(jMax+1).fill(0)
    }
    console.log(generationResult)
    //calculate result 
    for (let i=0; i <= iMax; i++) {
      for (let j=0; j <= jMax; j++ ) {
        let cellInitial = generationInit[i][j]
        let neighbourhoodSum = 0;
        if (i > 0 && j > 0)
          neighbourhoodSum += generationInit[i-1][j-1];
        if (i > 0)
          neighbourhoodSum += generationInit[i-1][j];
        if (i > 0 && j < jMax)
          neighbourhoodSum += generationInit[i-1][j+1];
        if (j > 0)
          neighbourhoodSum += generationInit[i][j-1];
        if (j < jMax)
          neighbourhoodSum += generationInit[i][j+1];
        if (i < iMax && j > 0)
          neighbourhoodSum += generationInit[i+1][j-1];
        if (i < iMax)
          neighbourhoodSum += generationInit[i+1][j];
        if (i < iMax && j < jMax)
          neighbourhoodSum += generationInit[i+1][j+1];

        // apply rules
        if (cellInitial === 1) {
          if (neighbourhoodSum < 2 || neighbourhoodSum > 3) {
            generationResult[i][j] = 0;
          } else {
            generationResult[i][j] = 1;
          }
        } else {
          if (neighbourhoodSum === 3) {
            generationResult[i][j] = 1;
          } else {
            generationResult[i][j] = 0;
          }
        }
      }
    }
    console.log(generationResult);
  }
    //return result;
  }

  module.exports = getGeneration;
