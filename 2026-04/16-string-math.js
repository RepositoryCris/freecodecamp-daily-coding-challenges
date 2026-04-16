function doMath(str) {
  // 1. Extract all numbers as an array of integers
  const numbers = str.match(/\d+/g).map(Number);

  // 2. Extract the "gaps" between the numbers
  // This finds all non-digit sequences that are sandwiched between digits
  const gaps = str.match(/(?<=\d)\D+(?=\d)/g) || [];

  // If there's only one number, just return it
  if (numbers.length === 0) return 0;
  let result = numbers[0];

  // 3. Iterate through numbers and apply operations based on gap length
  for (let i = 0; i < gaps.length; i++) {
    const nextNumber = numbers[i + 1];
    const gapLength = gaps[i].length;

    if (gapLength % 2 === 0) {
      result += nextNumber; // Even: Addition
    } else {
      result -= nextNumber; // Odd: Subtraction
    }
  }

  return result;
}
console.log(doMath("3ab10c8")); // should return 5.
console.log(doMath("6MINUS4")); // should return 2.
console.log(doMath("9plus3")); // should return 12.
console.log(doMath("5fkwo#10i#%.<>15P=@20!#B/25")); // should return 15.
console.log(
  doMath(
    "a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt",
  ),
); // should return 67.

/*
String Math
Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.

If the count of characters separating two numbers is even, use addition.
If it's odd, use subtraction.
Consecutive digits form a single number.
Operations are applied left to right.
Ignore leading and trailing characters that aren't digits.
For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.
*/
