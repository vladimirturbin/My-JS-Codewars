function determinant(m) {
  const matrixSize = m.length;

  if (matrixSize == 1) {
    return m[0][0]
  }
  if (matrixSize == 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]
  }
  if (matrixSize >= 3) {
    let result = 0;
    for (let i=0; i< matrixSize; i++) {
      let multiplyer;
      let newMatrix = [];
      if (i % 2 == 0) {
        multiplyer = m[0][i];
      } else {
        multiplyer = -1 * m[0][i]
      }
      for (let k=0; k< matrixSize; k++) {
        newMatrix.push(Array(...m[k]))
      }
      for (let j=0; j < matrixSize; j++) {
        newMatrix[j].splice(i, 1);
      }
      newMatrix.splice(0, 1);
      result += multiplyer * determinant(newMatrix)
    }
    return result;
  }
}

module.exports = determinant;