  function uniqueInOrder(iterable) {
    let result = [];
    if (!iterable) return result;
    result[0] = iterable[0];
    for (i=1; i<iterable.length; i++) {
      if (iterable[i] != iterable[i-1]) {
        result.push(iterable[i]);
      }
    }
    return result;
  }

  module.exports = uniqueInOrder;
