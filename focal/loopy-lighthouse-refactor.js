const loopyLighthouse = (range, multiples, words) => {
  for (let x = range[0]; x <= range[1]; x++) {
    const firstWord = words[0];
    const secondWord = words[1];
    const firstMultiple = multiples[0];
    const secondMultiple = multiples[1];
    // Determine result by divisibility
    let result = (x % firstMultiple === 0) ? firstWord : (x % secondMultiple === 0 ? secondWord : x);

    // if both conditions are true combine result message
    if (x % firstMultiple === 0 && x % secondMultiple === 0) {
      result = firstWord + secondWord;
    }
  
    // print result
    console.log(result);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Loopy", "Lighthouse"]);