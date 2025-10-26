function topThreeWords(text) {
  let words = text.matchAll(/'*[a-z]+'*[a-z]*/ig);
  let wordCounter = {}
  for (const i of words) {
    const word = i[0].toLowerCase();
    if (wordCounter[word]) {
      wordCounter[word] += 1 
    } else {
      wordCounter[word] = 1;
    }
  }

  let result = []
  let lowest = 0
  for (const [key, value] of Object.entries(wordCounter)) {
    if (value > lowest && result.length < 3) {
      result.push([key, value]);
      result.sort((a, b) => b[1] - a[1])
    } else if (value > lowest && result.length == 3) {
      result.push([key, value]);
      result.sort((a, b) => b[1] - a[1])
      result.pop();
      lowest = result[2][1]
    }
  }
  return result.map((a) => a[0])
}

  module.exports = topThreeWords;
