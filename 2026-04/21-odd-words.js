function getOddWords(str) {
  const words = str.split(" ");

  let oddWords = [];
  for (let word of words) {
    if (word.length % 2 !== 0) {
      oddWords = [...oddWords, word];
    }
  }
  return oddWords.join(" ");
}

console.log(getOddWords("This is a super good test")); // should return "a super".
console.log(getOddWords("one two three four")); // should return "one two three".
console.log(getOddWords("banana split sundae with rainbow sprinkles on top")); // should return "split rainbow sprinkles top".
console.log(getOddWords("The quick brown fox jumped over the lazy river")); // should return "The quick brown fox the river".

/*
Odd Words
Given a string of words, return only the words with an odd number of letters.

Words in the given string will be separated by a single space.
Return the words separated by a single space.
*/
