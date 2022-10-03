const biggestFollower = (data) => {
  // Return account that follows the most other accounts
  let counter = 0;
  let result = '';

  for (const item in data) {
    const followsNum = data[item]['follows'].length;

    if (followsNum > counter) {
      counter = followsNum;
      result = data[item]['name'];
    }
  }
  return result;
};

const mostPopular = (data) => {
  // returns the name of the most popular (most followed) individual
  // loop through 
};

const printAll = (data) => {
  // outputs a list of everyone and for each of them, the names of who they follow and who follows them
  let all = {};
  
  for (const item in data) {
    const myName = data[item]['name'];
    const iFollow = data[item]['follows'];

    // Scaffold object to print
    all[item] = {};
    all[item]['name'] = myName;
    all[item]['follows'] = [];
    all[item]['followers'] = [];

    // add names of who they are following
    for (const person of iFollow) {
      all[item]['follows'].push(data[person]['name']);

      const followsMeBack = data[person]['follows'].includes(item);
      if (followsMeBack) {
        all[item]['followers'].push(data[person]['name']);
      }
    }
  }

  return all;
};

const unrequitedFollowers = (data) => {
  // returns a list of names for those who follow someone that doesn't follow them back.
  let result = [];
  for (const item in data) {
    const myName = data[item]['name'];
    const iFollow = data[item]['follows'];

    for (const person of iFollow) {
      const followsMeBack = data[person]['follows'].includes(item);
      if (!followsMeBack) {
        result.push(myName);
      }
    }
  }

  return result;
};

/** More Goals **/
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List everyone and their reach (sum of # of followers and # of followers of followers)

// Test Code
const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};
console.log(data);
// console.log(printAll(data));
// console.log(biggestFollower(data));
console.log(unrequitedFollowers(data));