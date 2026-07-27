function isGoldenRatio(a, b) {
  const GOLDEN_RATIO = 1.618;
  const TOLERANCE = 0.01;

  // Handle zero case
  if (a === 0 || b === 0) {
    return false;
  }

  // Calculate the ratio (larger divided by smaller)
  const ratio = Math.max(a, b) / Math.min(a, b);

  // Check if within tolerance
  return Math.abs(ratio - GOLDEN_RATIO) <= TOLERANCE;
}

console.log(isGoldenRatio(21, 34)); // should return true.
console.log(isGoldenRatio(15, 20)); // should return false.
console.log(isGoldenRatio(8, 13)); // should return true.
console.log(isGoldenRatio(10, 16)); // should return false.
console.log(isGoldenRatio(1618, 1000)); // should return true.
console.log(isGoldenRatio(88, 55)); // should return false.

/*
Golden Ratio
Given two numbers, determine if their ratio approximates the golden ratio.

Use a golden ratio of 1.618
Allow a tolerance of 0.01
*/
