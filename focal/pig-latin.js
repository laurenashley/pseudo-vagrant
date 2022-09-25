const args = process.argv.slice(2);

const toPigLatin = (input) => {
  const isMultiple = input.length >= 2;
  const list = isMultiple ? input : input[0];

  if (input.length) {
    console.log(isMultiple, list);

    // Take head and append to end of each string

    // Append 'ay' to end of each string

    // Print joint list of new strings
  }
};

toPigLatin(args);