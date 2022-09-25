const args = process.argv.slice(2);

const reverse = function(input) {
  if (input.length) {
    const isMultiple = (input.length >= 2);
    const list = isMultiple ? input : input[0];
    let count = list.length - 1;
    let result = [];
  
    // count down from input.length - 1
    while (count >= 0) {
      if (isMultiple) {
        console.log(list[count]);
      } else {
        //push char by index [count] to result array
        result.push(list[count]);
      }
      count--;
    }
  
    if (!isMultiple) {
      console.log(result.join(''));
    }
  } else {
    console.log('No input was provided.');
  }
};

reverse(args);