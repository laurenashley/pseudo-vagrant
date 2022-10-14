const transpose = function(matrix) {
  const newMatrix = [];
  let row = matrix.length;
  let column = matrix[0].length;
  for (let y = 0; y < column; y++) {
    let newArray = [];
    for (let x = 0; x < row; x++) {
      let transposedY = x;
      let transposedX = y;
      newArray.push(matrix[transposedY][transposedX]);
    }
    newMatrix.push(newArray);
  }
  return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));