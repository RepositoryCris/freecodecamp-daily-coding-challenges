function fixPrankNumber(arr) {
  const n = arr.length;
  const gaps = [];

  // 1. Collect all gaps between adjacent numbers
  for (let i = 0; i < n - 1; i++) {
    gaps.push(arr[i + 1] - arr[i]);
  }

  // 2. Find the "True Difference" (d)
  // The true d is the one that appears most frequently.
  const counts = {};
  let d = gaps[0];
  let maxCount = 0;

  for (const gap of gaps) {
    counts[gap] = (counts[gap] || 0) + 1;
    if (counts[gap] > maxCount) {
      maxCount = counts[gap];
      d = gap;
    }
  }

  // 3. Find the "True Start" (a0)
  // We can't always trust arr[0].
  // We look for any index 'i' where the next value matches the pattern.
  // If arr[i+1] - arr[i] === d, then arr[i] is a valid reference point.
  let trueStart;
  let validIndex = -1;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] === d) {
      validIndex = i;
      break;
    }
  }

  // Calculate what index 0 should be based on our valid reference point
  trueStart = arr[validIndex] - validIndex * d;

  // 4. Rebuild the array
  return arr.map((_, i) => trueStart + i * d);
}

console.log(fixPrankNumber([2, 4, 7, 8, 10])); // should return [2, 4, 6, 8, 10].
console.log(fixPrankNumber([10, 10, 8, 7, 6])); // should return [10, 9, 8, 7, 6].
console.log(fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96])); // should return [12, 24, 36, 48, 60, 72, 84, 96].
console.log(fixPrankNumber([4, 1, -2, -5, -8, -5])); // should return [4, 1, -2, -5, -8, -11].
console.log(fixPrankNumber([0, 100, 200, 300, 150, 500])); // should return [0, 100, 200, 300, 400, 500].
console.log(fixPrankNumber([400, 425, 400, 375, 350, 325, 300])); // should return [450, 425, 400, 375, 350, 325, 300].
console.log(fixPrankNumber([-5, 5, 10, 15, 20])); // should return [0, 5, 10, 15, 20].

/*
Prank Number
Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:

The numbers increase from one to the next by a fixed amount (addition).
The numbers decrease from one to the next by a fixed amount (subtraction).
For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].
*/
