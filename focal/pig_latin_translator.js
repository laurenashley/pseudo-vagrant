const originalWords = process.argv.slice(2);
let pigLatinWords = [];

const translateToPigLatin = function(word) {
  // console.log("Word", word);
  // console.log("First letter", word[0]);
  // console.log("Rest of word", word.slice(2, word.length));
  return word.slice(1, word.length) + word[0] + "ay";
};

for (let i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));