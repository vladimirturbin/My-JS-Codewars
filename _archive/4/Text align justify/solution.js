/**
 * @param {String} text - inital string
 * @param {Number} width - line length
 */
function justify(text, width) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    // put maximum words in each line
    for (let i=0; i<words.length; i++) {
      if (currentLine === '') {
        currentLine = words[i]
      } else {
        if (currentLine.concat(" ", words[i]).length <= width) {
          currentLine = currentLine.concat(' ', words[i])
        } else {
          lines.push(currentLine);
          currentLine = words[i];
        }
      }
    }
    lines.push(currentLine);

    // add necessary spaces
    let resultLines = [];
    for (let i = 0; i < (lines.length - 1); i++) {
      const spacesCount = lines[i].split(" ").length - 1;
      const surplus = width - lines[i].length;
      const singleSurplus = (surplus - surplus % spacesCount) / spacesCount + 1;
      let rest = surplus % spacesCount;

      let words = lines[i].split(" ");
      for(let j = 0; j < (words.length - 1); j++) {
        words[j] = words[j].concat(" ".repeat(singleSurplus))
        if (rest > 0) {
          words[j] = words[j].concat(" ");
          rest--;
        }
      }
      resultLines.push(words.join(''));
    }
    // add the last line in pure form
    resultLines.push(lines[lines.length - 1]);

    const result = resultLines.join('\n')
    return result;
  }