const args = process.argv.slice(2);
console.log(args);

const sum = function(args) {
  let sum = 0;
  let result = '';

  for (let val of args) {
    sum += Number(val);
  }
  result = 'Sum is: ' + sum;

  return result;
};

console.log(sum(args));
