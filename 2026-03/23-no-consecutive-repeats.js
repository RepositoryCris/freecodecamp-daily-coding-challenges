function hasNoRepeats(str) {
  // Loop through the string, stopping at the second-to-last character
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the current character is the same as the next one
    if (str[i] === str[i + 1]) {
      // If they match, it's a consecutive repeat
      return false;
    }
  }

  // If the loop finishes, no consecutive repeats were found
  return true;
}

console.log(hasNoRepeats("hi world")); // should return true.
console.log(hasNoRepeats("hello world")); // should return false.
console.log(hasNoRepeats("abcdefghijklmnopqrstuvwxyz")); // should return true.
console.log(hasNoRepeats("freeCodeCamp")); // should return false.
console.log(hasNoRepeats("The quick brown fox jumped over the lazy dog.")); // should return true.
console.log(hasNoRepeats("Mississippi")); // should return false.

/*No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
*/
