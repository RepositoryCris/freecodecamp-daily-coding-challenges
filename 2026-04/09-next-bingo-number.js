// 1. Define the sequence of letters
const BINGO_LETTERS = ["B", "I", "N", "G", "O"];

// 2. Generate the "Universe" (B1, B2... O75)
// We do this once outside the function so it's cached in memory.
const BINGO_SEQUENCE = BINGO_LETTERS.flatMap((char, index) =>
  Array.from({ length: 15 }, (_, i) => `${char}${index * 15 + i + 1}`),
);

function getNextBingoNumber(current) {
  // Find where we are in the universe
  const currentIndex = BINGO_SEQUENCE.indexOf(current);

  // If not found (invalid input), handle gracefully
  if (currentIndex === -1) return BINGO_SEQUENCE[0];

  // Get the next index (using modulo for the wrap-around to B1)
  const nextIndex = (currentIndex + 1) % BINGO_SEQUENCE.length;

  return BINGO_SEQUENCE[nextIndex];
}

console.log(getNextBingoNumber("B10")); // should return "B11".
console.log(getNextBingoNumber("N33")); // should return "N34".
console.log(getNextBingoNumber("I30")); // should return "N31".
console.log(getNextBingoNumber("G60")); // should return "O61".
console.log(getNextBingoNumber("O75")); // should return "B1".

/*
Next Bingo Number
Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".
*/
