function isFizzBuzz(arr) {
  if (arr.length === 0) return true;

  // 1. Find the starting number of the sequence.
  // We look for the first element that is a number to calculate the offset.
  let startNumber;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      startNumber = arr[i] - i;
      break;
    }
  }

  // 2. If the array is all strings (e.g., ["Fizz", "Buzz"]),
  // we must deduce the number from the strings themselves.
  if (startNumber === undefined) {
    // This is a rare edge case for FizzBuzz sequences, but for
    // completeness, we can check the first string's valid possibilities.
    // However, in standard sequential tests, at least one number usually appears.
    // For this validator, we'll assume the sequence follows standard math.
    return false; // Or implement logic to solve for X in "Fizz"
  }

  // 3. Validate every element
  for (let i = 0; i < arr.length; i++) {
    const currentNum = startNumber + i;
    let expected;

    if (currentNum % 15 === 0) {
      expected = "FizzBuzz";
    } else if (currentNum % 3 === 0) {
      expected = "Fizz";
    } else if (currentNum % 5 === 0) {
      expected = "Buzz";
    } else {
      expected = currentNum;
    }

    if (arr[i] !== expected) {
      return false;
    }
  }

  return true;
}

console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])); // should return true.
console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17])); // should return true.
console.log(isFizzBuzz([1, 2, "Fizz", 4, 5])); // should return false.
console.log(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])); // should return true.
console.log(isFizzBuzz([1, 2, "Fizz", "Buzz", 5])); // should return false.
console.log(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])); // should return false.
console.log(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])); // should return true.

/*
FizzBuzz Validator
Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:

Multiples of 3 are replaced with "Fizz".
Multiples of 5 are replaced with "Buzz".
Multiples of both 3 and 5 are replaced with "FizzBuzz".
All other numbers remain as integers.

*/

/*1. Mathematical Formula
A value x is a multiple of y if there exists an integer k  such that:

x = y * k

Alternatively, check for the remainder:

x / y = integer with remainder = 0
*/
