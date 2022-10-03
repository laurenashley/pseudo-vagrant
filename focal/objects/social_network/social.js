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
  console.log('The person who follows the most people is: ');
  return result;
};

const mostPopular = (data) => {
  // returns the name of the most popular (most followed) individual
  const numOfFollowersObj = {};
  let result = [];

  // Build object that shows how many follows each person has
  for (const item in data) {
    for (const followed of data[item]['follows']) {
      // find followed in result obj, inc num by 1
      let me = data[followed]['name'];
      numOfFollowersObj[me] = Object.keys(numOfFollowersObj).includes(me) ? numOfFollowersObj[me] += 1 : 1;
    }
  }

  // Find person(s) with highest num of follower
  const maxValuePerson = Object.keys(numOfFollowersObj).reduce((a, b) => numOfFollowersObj[a] > numOfFollowersObj[b] ? a : b);
  const maxValue = numOfFollowersObj[maxValuePerson];

  for (const person in numOfFollowersObj) {
    if (numOfFollowersObj[person] === maxValue) result.push(person);
  }
  console.log(`These are the most Popular Accounts and they each have ${maxValue} followers:`)
  return result;
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
  console.log('All accounts, who they follow and who follows them: ');
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
  console.log('List of people who follow someone that does not follow them back: ');
  return result;
};

/** TO DO More Goals **/
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
// console.log(data);
console.log(printAll(data));
console.log(biggestFollower(data));
console.log(mostPopular(data));
console.log(unrequitedFollowers(data));