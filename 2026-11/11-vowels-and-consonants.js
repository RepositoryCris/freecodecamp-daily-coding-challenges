const VOWEL = /[aeiou]/i;
const LETTER = /[a-z]/i;

function count(str) {
  let vowels = 0;
  let consonants = 0;

  for (const ch of str) {
    if (VOWEL.test(ch)) vowels++;
    else if (LETTER.test(ch)) consonants++;
  }

  return [vowels, consonants];
}

console.log(count("Hello World")); // should return [3, 7].
console.log(count("JavaScript")); // should return [3, 7].
console.log(count("Python")); // should return [1, 5].
console.log(count("freeCodeCamp")); // should return [5, 7].
console.log(count("Hello, World!")); // should return [3, 7].
console.log(count("The quick brown fox jumps over the lazy dog.")); // should return [11, 24].

/*Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].*/
