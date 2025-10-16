function moveZeros(arr) {
    const result = [...arr].sort((a, b) => {
      if ((a === 0)&&(b === 0)) return 0;
      if (a === 0) return 1;
      if (b === 0) return -1;
      return 0;
    })
    return result;
  }

  module.exports = moveZeros;
