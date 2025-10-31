console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.', 28))
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