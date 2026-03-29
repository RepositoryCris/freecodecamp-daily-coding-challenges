function isValidIsbn10(str) {
  const regex = /([\d+ | \w])-(\d+)-(\d+)-([\d+ | \w])/;
  const digits = str.match(regex);

  const build = `${digits[1]}${digits[2]}${digits[3]}${digits[4]}`;

  for (let i = 0; i < 9; i++) {
    if (isNaN(build[i])) {
      return false;
    }
  }

  let total = 0;
  let counter = 1;

  for (let i = 0; i < 10; i++) {
    if (build[9] === "X") {
      total += 10 * counter;
    } else {
      total += build[i] * counter;
    }
    counter += 1;
  }

  if (total % 11 === 0) {
    return true;
  }
  {
    return false;
  }
}

console.log(isValidIsbn10("0-306-40615-2")); // should return true.
console.log(isValidIsbn10("0-306-40615-1")); // should return false.
console.log(isValidIsbn10("0-8044-2957-X")); // should return true.
console.log(isValidIsbn10("X-306-40615-2")); // should return false.
console.log(isValidIsbn10("0-6822-2589-4")); // should return true.

/*
ISBN-10 Validator
Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):

The first 9 characters must be digits, and
The final character may be a digit or the letter "X", which represents the number 10.
To validate it:

Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
Add all the results together.
If the total is divisible by 11, it's valid.
*/
