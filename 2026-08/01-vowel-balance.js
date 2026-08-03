function isBalanced(s) {
  // Input validation
  if (typeof s !== "string") return false;

  const cleanStr = s.trim(); // Handle spaces
  const mid = Math.floor(cleanStr.length / 2);
  const isOdd = cleanStr.length % 2 !== 0;

  // Split into halves, ignoring middle char if odd
  const firstHalf = cleanStr.slice(0, mid);
  const secondHalf = cleanStr.slice(isOdd ? mid + 1 : mid);

  const countVowels = (str) => {
    const vowels = /[aeiou]/i;
    let count = 0;
    for (const char of str) {
      if (vowels.test(char)) count++;
    }
    return count;
  };

  return countVowels(firstHalf) === countVowels(secondHalf);
}

console.log(isBalanced("racecar")); // should return true.
console.log(isBalanced("Lorem Ipsum")); // should return true.
console.log(isBalanced("Kitty Ipsum")); // should return false.
console.log(isBalanced("string")); // should return false.
console.log(isBalanced(" ")); // should return true.
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz")); // should return false.
console.log(isBalanced("123A#b!E&*456-o.U")); // should return true.

/*
Vowel Balance
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.
*/
