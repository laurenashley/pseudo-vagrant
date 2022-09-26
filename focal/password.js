const arg = process.argv.slice(2);

const replaceChar = (char) => {
  switch (char) {
  case 'a':
    char = '4';
    break;
  case 'e':
    char = '3';
    break;
  case 'o':
    char = '0';
    break;
  case 'l':
    char = '1';
    break;
  }
  return char;
};

const obfuscate = (string) => {
  let obfuscatedString = '';

  for (let char of string[0]) {
    char = replaceChar(char);
    obfuscatedString += char;
  }

  return obfuscatedString;
};

console.log(obfuscate(arg));