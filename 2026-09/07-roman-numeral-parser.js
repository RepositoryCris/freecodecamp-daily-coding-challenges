function parseRomanNumeral(numeral) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numbers = numeral.split("").map((char) => romanMap[char]);
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i < numbers.length - 1 && numbers[i] < numbers[i + 1]) {
      total -= numbers[i];
    } else {
      total += numbers[i];
    }
  }

  return total;
}
console.log(parseRomanNumeral("III")); // should return 3.
console.log(parseRomanNumeral("IV")); // should return 4.
console.log(parseRomanNumeral("XXVI")); // should return 26.
console.log(parseRomanNumeral("XCIX")); // should return 99.
console.log(parseRomanNumeral("CDLX")); // should return 460.
console.log(parseRomanNumeral("DIV")); // should return 504.
console.log(parseRomanNumeral("MMXXV")); // should return 2025.

/*
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

*/
