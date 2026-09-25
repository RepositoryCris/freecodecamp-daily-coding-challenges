function isPerfectSquare(n) {
  // Negative numbers are never perfect squares
  if (n < 0) return false;

  const square = Math.sqrt(n);

  // Check if the square root is an integer
  return Number.isInteger(square);
}

console.log(isPerfectSquare(9)); // should return true.
console.log(isPerfectSquare(49)); // should return true.
console.log(isPerfectSquare(1)); // should return true.
console.log(isPerfectSquare(2)); // should return false.
console.log(isPerfectSquare(99)); // should return false.
console.log(isPerfectSquare(-9)); // should return false.
console.log(isPerfectSquare(0)); // should return true.
console.log(isPerfectSquare(25281)); // should return true.

/*
Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.
*/
