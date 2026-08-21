function squaresWithThree(n) {
  let current = 1;
  let count = 0;

  while (current <= n) {
    const square = String(current ** 2);
    if (/3/.test(square)) {
      count++;
    }
    current++;
  }

  return count;
}

console.log(squaresWithThree(1)); // should return 0.
console.log(squaresWithThree(10)); // should return 1.
console.log(squaresWithThree(100)); // should return 19.
console.log(squaresWithThree(1000)); // should return 326.
console.log(squaresWithThree(10000)); // should return 4531.

/*
3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/
