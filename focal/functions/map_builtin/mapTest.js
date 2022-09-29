const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const mapStrLengths = strings => {
  return strings.map(str => str.length);
};

console.log(mapStrLengths(lighthouses));