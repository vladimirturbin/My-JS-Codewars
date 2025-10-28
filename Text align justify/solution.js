justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris', 30)
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
      const wordsCount = line.split(" ").length;
      const surplus = width = line.length;
      const singleSurplus = surplus % (wordsCount - 1)
      let rest = surplus - surplus % (wordsCount - 1) * (wordsCount - 1);

      let words = line.split(" ");
      for(i = 0; i < (words.length - 1); i++) {
        words[i] = words.concat(" ".repeat(singleSurplus))
        if (rest > 0) {
          words[i].concat(" ");
          rest--;
        }
      }
      console.log(line);
    }
  }

  module.exports = justify;
