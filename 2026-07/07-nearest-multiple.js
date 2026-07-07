function roundToNearestMultiple(num, multiple) {
  // Find the lower multiple
  let lower = num;
  while (lower % multiple !== 0) {
    lower--;
  }

  // Find the upper multiple (starting from num again)
  let upper = num;
  while (upper % multiple !== 0) {
    upper++;
  }

  // Calculate which is closer
  const diffLower = num - lower;
  const diffUpper = upper - num;

  // Return the closer one (if tie, return the upper)
  return diffUpper < diffLower ? upper : lower;
}

// Test cases
console.log(roundToNearestMultiple(5, 3)); // should return 6.
console.log(roundToNearestMultiple(17, 4)); // should return 16.
console.log(roundToNearestMultiple(43, 5)); // should return 45.
console.log(roundToNearestMultiple(38, 11)); // should return 33.
console.log(roundToNearestMultiple(93, 12)); // should return 96.

/*
Nearest Multiple
Given two integers, round the first to the nearest multiple of the second.
*/
