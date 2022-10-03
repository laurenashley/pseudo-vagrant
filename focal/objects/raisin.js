// Pair Programming w/ @gozi1

const raisinAlarm = function(cookie) {
  for (const item of cookie) {
    if (item === '🍇') return 'Raisin alert!';
  }
  return 'All good';
};



console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  const returnArray = [];
  for (const item of cookies) {
    returnArray.push(raisinAlarm(item));
  }
  return returnArray;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);