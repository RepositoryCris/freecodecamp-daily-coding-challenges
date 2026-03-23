function computeScore(judgeScores, ...penalties) {
  // Sort the scores numerically
  const sortedScores = [...judgeScores].sort((a, b) => a - b);

  // Remove the first (lowest) and last (highest) elements
  // slice(1, -1) takes everything from index 1 up to (but not including) the last index
  const middleScores = sortedScores.slice(1, -1);

  // Sum the remaining 8 scores
  const baseScore = middleScores.reduce((sum, score) => sum + score, 0);

  // Sum all penalties provided as extra arguments
  const totalPenalties = penalties.reduce((sum, p) => sum + p, 0);

  // Return final result
  return baseScore - totalPenalties;
}

console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)); // should return 64.
console.log(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // should return 80.
console.log(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)); // should return 67.
console.log(
  computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0),
); // should return 67.5.
console.log(
  computeScore(
    [6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0],
    1.5,
    0.5,
    0.5,
  ),
); // should return 59.

/*2026 Winter Games Day 6: Figure Skating
Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.*/
