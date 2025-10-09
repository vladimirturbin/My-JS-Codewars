  function yourKataFunction(cc) {
    if (cc.length < 5) {
      return cc.slice( - cc.length);
    }
    return '#'.repeat(cc.length - 4) + cc.slice(-4);
  }

  module.exports = yourKataFunction;
