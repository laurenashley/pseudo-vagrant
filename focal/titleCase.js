// Construct a function called titleCase that takes a sentence string and gives it title casing

const titleCase = (text) => {
  let result = '';
  // if string is uppercase, lower it
  const strArray = text.toLowerCase().split(' ');

  if (text === '') return text;

  // strArray.forEach(e => {
  //   console.log('e before ', e);
  //   e = e[0].toUpperCase() + e.substring(1);
  //   console.log('e after ', e);
  // });

  for (let i of strArray) {
    let item = i;
    i = item[0].toUpperCase() + item.substring(1);

    console.log('item ', item, item[0].charAt(0).toUpperCase());
  }
  console.log('strArray ', strArray);

  result = strArray.join(' ');
  return result;
};

console.log(titleCase('this is an example'));
console.log(titleCase('test'));
console.log(titleCase('i r cool'));
console.log(titleCase('WHAT HAPPENS HERE'));
console.log(titleCase(''));
console.log(titleCase('A'));