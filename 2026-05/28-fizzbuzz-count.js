function fizzBuzzCount(start, end) {
  let fizz = 0;
  let buzz = 0;

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) fizz++;
    if (i % 5 === 0) buzz++;
  }

  return { fizz, buzz };
}

// Test cases
console.log(fizzBuzzCount(1, 11)); // { fizz: 3, buzz: 2 }
console.log(fizzBuzzCount(14, 41)); // { fizz: 9, buzz: 6 }
console.log(fizzBuzzCount(24, 100)); // { fizz: 26, buzz: 16 }
console.log(fizzBuzzCount(-635, -14)); // { fizz: 207, buzz: 125 }
console.log(fizzBuzzCount(-5432, 6789)); // { fizz: 4074, buzz: 2444 }

/*
FizzBuzz Count
Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).

Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.
*/
