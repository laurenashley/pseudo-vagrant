const args = process.argv.slice(2);

const toPigLatin = (input) => {
  const isMultiple = input.length >= 2;
  const list = isMultiple ? input : input[0];

  if (input.length) {
    let pigLatinStrings = [];

    list.forEach(e => {
      const head = e[0];
      pigLatinStrings.push(e.slice(1) + head + 'ay');
    });

    // Print joint sentence of new strings
    console.log(pigLatinStrings.join(' '));
  } else {
    console.log('No input provided');
  }
};

toPigLatin(args);