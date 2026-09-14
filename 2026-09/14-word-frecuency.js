function getWords(paragraph) {
  // 1. Normalize: lowercase, split on spaces and punctuation, remove empties
  const words = paragraph
    .toLowerCase()
    .split(/[\s,.!]+/)
    .filter(Boolean);

  // 2. Count each word
  const wordCount = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  // 3. Sort by count (descending) and return top 3 words
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((entry) => entry[0]);
}

console.log(
  getWords(
    "Coding in Python is fun because coding Python allows for coding in Python easily while coding",
  ),
); // should return ["coding", "python", "in"].
console.log(getWords("I like coding. I like testing. I love debugging!")); // should return ["i", "like", "coding"].
console.log(
  getWords(
    "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!",
  ),
); // should return ["debug", "test", "deploy"].

/*
Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.
*/
