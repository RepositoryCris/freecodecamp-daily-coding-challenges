function getLongestWord(sentence) {
  const words = sentence.split(" ").map((word) => word.replaceAll(".", ""));

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(getLongestWord("coding is fun")); // should return "coding".
console.log(getLongestWord("Coding challenges are fun and educational.")); // should return "educational".
console.log(getLongestWord("This sentence has multiple long words.")); // should return "sentence".

/*
Longest Word
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.
*/
