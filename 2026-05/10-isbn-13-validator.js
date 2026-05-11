function isValidIsbn13(isbn) {
  // Remove hyphens
  let cleaned = isbn.replace(/-/g, "");

  // Check: exactly 13 digits
  if (!/^\d{13}$/.test(cleaned)) {
    return false;
  }

  // Calculate weighted sum (alternating 1 and 3)
  let sum = 0;
  for (let i = 0; i < 13; i++) {
    let digit = parseInt(cleaned[i]);
    let weight = i % 2 === 0 ? 1 : 3;
    sum += digit * weight;
  }

  // Valid if sum is divisible by 10
  return sum % 10 === 0;
}

console.log(isValidIsbn13("9780306406157")); // should return true.
console.log(isValidIsbn13("97803064061570")); // should return false.
console.log(isValidIsbn13("978-0-13-595705-9")); // should return true.
console.log(isValidIsbn13("978-030-64061A-4")); //should return false.
console.log(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9")); // should return true.

/*
ISBN-13 Validator
Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:

Contains only digits and hyphens
Has exactly 13 digits after removing hyphens
Passes the following check:
Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
The sum of the results must be divisible by 10.
*/
