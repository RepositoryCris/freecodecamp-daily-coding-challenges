function addPunctuation(sentences) {
  let matches = [...sentences.matchAll(/\s[A-Z]/g)];
  let positions = [];
  matches.forEach((match) => {
    positions = [...positions, match.index];
  });

  let array = [];

  for (let i = 0; i < sentences.length; i++) {
    array.push(sentences[i]);
  }

  let counter = 0;
  for (let j = 0; j < positions.length; j++) {
    array.splice(positions[j] + counter, 0, ".");
    counter = counter + 1;
  }

  array.splice(array.length + 1, 0, ".");

  return String(array.join(""));
}

console.log(addPunctuation("Hello world")); // should return "Hello world."
console.log(addPunctuation("Hello world It's nice today")); // should return "Hello world. It's nice today."
console.log(addPunctuation("JavaScript is great Sometimes")); // should return "JavaScript is great. Sometimes."
console.log(
  addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z"),
); // should return "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."
console.log(addPunctuation("Wait.. For it")); // should return "Wait... For it."

/*To solve this, we can use a Regular Expression with a lookahead or a simple loop. The key is to find spaces followed by an uppercase letter and insert the period before that space.

Here is a clean implementation in JavaScript:

JavaScript
function addPunctuation(str) {
  // Replace a space followed by an uppercase letter with ". "
  // and append a period at the very end of the string.
  return str.replace(/ (?=[A-Z])/g, ". ") + ".";
}*/

/*Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.*/
