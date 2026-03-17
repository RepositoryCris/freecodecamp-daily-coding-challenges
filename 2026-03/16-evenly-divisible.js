function isEvenlyDivisible(a, b) {
  if (a % b === 0) {
    return true;
  }
  return false;
}

console.log(isEvenlyDivisible(4, 2)); // should return true.
console.log(isEvenlyDivisible(7, 3)); //should return false.
console.log(isEvenlyDivisible(5, 10)); //should return false.
console.log(isEvenlyDivisible(48, 6)); //should return true.
console.log(isEvenlyDivisible(3186, 9)); //should return true.
console.log(isEvenlyDivisible(4192, 11)); //should return false.

/*Evenly Divisible
Given two integers, determine if you can evenly divide the first one by the second one.*/
