function isValidNonogram(clue, cells) {
  // Edge case: empty cells should only be valid with empty clue
  if (cells.length === 0) return clue.length === 0;

  let clueIndex = 0;
  let currentBlockLength = 0;
  let totalOnes = 0;
  const totalClueSum = clue.reduce((sum, num) => sum + num, 0);

  // Count total ones in cells
  for (let cell of cells) {
    if (cell === 1) totalOnes++;
  }

  // Quick validation: total filled cells must match sum of clues
  if (totalOnes !== totalClueSum) return false;

  // Process each cell
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      currentBlockLength++;

      // If we've exceeded the current clue, invalid
      if (clueIndex >= clue.length || currentBlockLength > clue[clueIndex]) {
        return false;
      }
    } else {
      // cell === 0
      // If we just finished a block
      if (currentBlockLength > 0) {
        // Check if the block matches the current clue
        if (currentBlockLength !== clue[clueIndex]) {
          return false;
        }
        clueIndex++;
        currentBlockLength = 0;
      }
    }
  }

  // Handle the last block if it reaches the end
  if (currentBlockLength > 0) {
    if (clueIndex >= clue.length || currentBlockLength !== clue[clueIndex]) {
      return false;
    }
    clueIndex++;
  }

  // All clues must be matched
  return clueIndex === clue.length;
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
