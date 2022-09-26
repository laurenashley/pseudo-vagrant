const arg = process.argv.slice(2);

const replaceChar = (char, newChar) => {
  console.log(char, newChar);
};

const obfuscate = (string) => {
  const charArray = Array.from(string);
  let obfuscatedString = '';

  console.log(string[2]);

  for (let element of string) {
    console.log(element);
    switch (element) {
    case 'a':
      element = replaceChar(element, '4');
      break;
    case 'e':
      element = replaceChar(element, '3');
      break;
    case 'o':
      element = replaceChar(element, '0');
      break;
    case 'l':
      element = replaceChar(element, '1');
      break;
    }

    obfuscatedString += element;
  }

  return obfuscatedString;
};

console.log(obfuscate(arg));