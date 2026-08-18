function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(0)); // should return 1.
console.log(factorial(5)); // should return 120.
console.log(factorial(20)); // should return 2432902008176640000.

/*
Factorializer
Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.
*/
