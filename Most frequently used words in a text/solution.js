topThreeWords('aaa aa\'a AAA');
function topThreeWords(text) {
  let words = text.matchAll(/[a-z']+/ig);
  let wordCounter = {}
  for (const i of words) {
    const word = i[0].toLowerCase();
    if (wordCounter[word]) {
      wordCounter[word] += 1 
    } else {
      wordCounter[word] = 1;
    }
    console.log(wordCounter)
  }
}

  module.exports = topThreeWords;
