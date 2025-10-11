  function order(args) {
    if (args==="") return "";
  
  const words = args.split(" ")
  let order = new Array(words.length);

  for (const word of words) {
    for (const char of word) {
      const number = parseInt(char)
      if(number) {
        order[char-1] = word;
      } 
    }
  }
  const result = order.join(" ");
    return result;
  }

  module.exports = order;
