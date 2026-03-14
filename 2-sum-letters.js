function sumLetters(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);

    // Uppercase letters: A=65 to Z=90
    if (code >= 65 && code <= 90) {
      sum += code - 64; // A=1, B=2, etc.
    }
    // Lowercase letters: a=97 to z=122
    else if (code >= 97 && code <= 122) {
      sum += code - 96; // a=1, b=2, etc.
    }
    // Ignore all other characters
  }

  return sum;
}

console.log(sumLetters("Hello"));
console.log(sumLetters("freeCodeCamp"));
console.log(sumLetters("The quick brown fox jumps over the lazy dog."));
console.log(
  sumLetters(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.",
  ),
);
console.log(sumLetters("</404>"));

/*Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters. */
