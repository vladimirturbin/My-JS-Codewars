function solution(string) {
    if (!/[A-Z]/.test(string))
      return string;

    const firstWord = string.match(/^[a-z]*/);
    const otherWords = string.match(/[A-Z][a-z]*/g);
    const result = firstWord[0] + ' ' + otherWords.join(' ')
    return result;
  }

  module.exports = solution;
