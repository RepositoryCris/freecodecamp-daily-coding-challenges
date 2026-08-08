function isValidNonogram(clue, cells) {
  return clue;
}

console.log(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])); // should return true.
console.log(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])); // should return false.
console.log(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])); // should return false.
console.log(isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0])); // should return true.
console.log(
  isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]),
); // should return true.
console.log(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0])); // should return false.

/*
Nonogram Validator
Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.

The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
The row is an array of 1s (filled) and 0s (empty).
*/
