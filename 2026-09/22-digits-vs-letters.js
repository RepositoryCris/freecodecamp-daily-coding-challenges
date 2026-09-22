function digitsOrLetters(str) {
  const countDigits = (str.match(/[0-9]/g) || []).length;
  const countLetters = (str.toLowerCase().match(/[a-z]/g) || []).length;

  if (countDigits > countLetters) {
    return "digits";
  } else if (countDigits < countLetters) {
    return "letters";
  } else {
    return "tie";
  }
}

console.log(digitsOrLetters("abc123")); // should return "tie".
console.log(digitsOrLetters("a1b2c3d")); // should return "letters".
console.log(digitsOrLetters("1a2b3c4")); // should return "digits".
console.log(digitsOrLetters("abc123!@#DEF")); // should return "letters".
console.log(digitsOrLetters("H3110 W0R1D")); // should return "digits".
console.log(digitsOrLetters("P455W0RD")); // should return "tie".

/*
Digits vs Letters
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
*/
