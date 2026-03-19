function largestNumber(str) {
  // 1. Split by any of the specified characters
  const segments = str.split(/[!?,:;]/);

  // 2. Filter out empty strings and convert to numbers
  const numbers = segments.filter((val) => val.length > 0).map(Number);

  // 3. Find the maximum using the spread operator
  return numbers.length > 0 ? Math.max(...numbers) : null;
}

console.log(largestNumber("1,2")); // should return 2.
console.log(largestNumber("4;15:60,26?52!0")); // should return 60.
console.log(
  largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"),
); // should return -402.
console.log(largestNumber("12;-50,99.9,49.1!-10.1?88?16")); // should return 99.9.

/*Largest Number
Given a string of numbers separated by various punctuation, return the largest number.

The given string will only contain numbers and separators.
Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").*/
