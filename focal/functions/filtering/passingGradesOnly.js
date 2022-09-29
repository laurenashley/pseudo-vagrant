const filterNums = (nums, threshold) => {
  return nums.filter(num => num > threshold);
};

// Test Code
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

console.log('Passing grades: ', filterNums(grades, 70));
