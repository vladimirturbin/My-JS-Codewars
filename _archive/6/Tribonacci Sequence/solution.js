console.log(tribonacci([1,1,1],5));

function tribonacci(signature,n) {

  switch(n) {
    case 0:
      return [];
    case 1:
      return [signature[0]];
    case 2:
      return [signature[0], signature[1]];
    case 3:
      return [signature[0], signature[1], signature[2]];
    default:
      const prevResult = tribonacci(signature, n-1);
      return [...prevResult, 
    (prevResult[prevResult.length - 1]
      + prevResult[prevResult.length - 2]
      + prevResult[prevResult.length - 3])]
  }
}
  module.exports = tribonacci;
