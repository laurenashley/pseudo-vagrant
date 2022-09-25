// Loop N number of times, adding random number between 1-6 to result array
const rollDice = (num) => {
  let result = [];
  let counter = 0;

  while (counter < num) {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    counter++;
    result.push(randomNum);
  }

  console.log(`Rolled ${num} dice: `, result.join(','));
};

// Test Code
rollDice(7);
rollDice(3);
rollDice(0);
rollDice(1);