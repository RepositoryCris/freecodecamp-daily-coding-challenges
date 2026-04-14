function getLastLetter(str) {
  let highestChar = "";
  let highestCode = -1;

  for (const char of str) {
    // Skip non-letters
    if (!isLetter(char)) continue;

    const charCode = getUpperCaseCode(char);

    if (charCode > highestCode) {
      highestCode = charCode;
      highestChar = char;
    }
  }

  return highestChar;
}

function isLetter(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

function getUpperCaseCode(char) {
  return char.toUpperCase().charCodeAt(0);
}

/*
Last Letter
Given a string, return the letter from the string that appears last in the alphabet.

If two or more letters tie for the last in the alphabet, return the first one.
Ignore all non-letter characters.
*/
console.log(getLastLetter("world")); // should return "w".
console.log(getLastLetter("Hello World")); // should return "W".
console.log(getLastLetter("The quick brown fox jumped over the lazy dog.")); // should return "z".
console.log(getLastLetter("HeLl0")); // should return "L".
console.log(getLastLetter("!#$ er@R asd fT.,> 2t0e9")); // should return "T".
