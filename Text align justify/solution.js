justify('aa a aaa aa aa aaaa aaa aaa aaaaa aa aaaa aaaa', 10)
function justify(text, width) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';
    for (i=0; i<words.length; i++) {
      if (currentLine === '') {
        currentLine = words[i]
      } else {
        if (currentLine.concat(" ", words[i]).length < width) {
          currentLine = currentLine.concat(' ', words[i])
        } else {
          lines.push(currentLine);
          currentLine = words[i];
        }
      }
    }
    lines.push(currentLine);

    console.log(lines)

    for (let line of lines) {
      const spacesCount = line.split(" ").length - 1;
      const surplus = width - line.length;
      const singleSurplus = (surplus - surplus % spacesCount) / spacesCount;
      let rest = surplus % spacesCount;

      let words = line.split(" ");
      for(i = 0; i < (words.length - 1); i++) {
        words[i] = words[i].concat(" ".repeat(singleSurplus))
        if (rest > 0) {
          words[i] = words[i].concat(" ");
          rest--;
        }
      }
      console.log(words.join(''));
    }
  }

  module.exports = justify;
