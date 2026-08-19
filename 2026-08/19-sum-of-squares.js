function sumOfSquares(n) {
  if (n === 0) {
    return 0;
  }
  return n ** 2 + sumOfSquares(n - 1);
}

console.log(sumOfSquares(5)); // should return 55.
console.log(sumOfSquares(10)); // should return 385.
console.log(sumOfSquares(25)); // should return 5525.
console.log(sumOfSquares(500)); // should return 41791750.
console.log(sumOfSquares(1000)); // should return 333833500.

/*
Sum of Squares
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
*/
