function invertMatrix(matrix) {
  // 1. Flatten the matrix and get the two unique values
  const flatArray = matrix.flat();
  const uniqueValues = [...new Set(flatArray)];

  const x = uniqueValues[0];
  const y = uniqueValues[1];

  // 2. Map through the matrix to create the inverted version
  return matrix.map((row) => {
    return row.map((element) => {
      // If it's the first value, return the second; otherwise, return the first.
      return element === x ? y : x;
    });
  });
}

console.log(
  invertMatrix([
    ["a", "b"],
    ["a", "a"],
  ]),
); // should return [["b", "a"], ["b", "b"]].
console.log(
  invertMatrix([
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 0],
  ]),
); // should return [[0, 1, 0], [0, 0, 0], [1, 0, 1]].
console.log(
  invertMatrix([
    ["apple", "banana", "banana", "apple"],
    ["banana", "apple", "apple", "banana"],
    ["banana", "banana", "banana", "apple"],
  ]),
); // should return [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]].
console.log(
  invertMatrix([
    [6, 7, 7, 7, 6],
    [7, 6, 7, 6, 7],
    [7, 7, 6, 7, 7],
    [7, 6, 7, 6, 7],
    [6, 7, 7, 7, 6],
  ]),
); // should return [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]].
console.log(
  invertMatrix([
    [1.2, 2.1, 2.1, 2.1],
    [2.1, 1.2, 2.1, 1.2],
    [1.2, 1.2, 2.1, 2.1],
  ]),
); // should return [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]].

/*Inverted Matrix
Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:

[
  ["a", "b"],
  ["a", "a"]
]
Return:

[
  ["b", "a"],
  ["b", "b"]
]*/
