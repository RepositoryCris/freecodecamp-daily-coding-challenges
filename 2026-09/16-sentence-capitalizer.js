function capitalize(paragraph) {
  let result = "";
  let capitalizeNext = true; // true until we've capitalized the first letter of the current sentence

  for (let i = 0; i < paragraph.length; i++) {
    const ch = paragraph[i];
    if (/[a-zA-Z]/.test(ch) && capitalizeNext) {
      result += ch.toUpperCase();
      capitalizeNext = false;
    } else if (ch === "." || ch === "?" || ch === "!") {
      capitalizeNext = true;
      result += ch;
    } else {
      result += ch;
    }
  }

  return result;
}

console.log(capitalize("this is a simple sentence.")); // should return "This is a simple sentence.".
console.log(capitalize("hello world. how are you?")); // should return "Hello world. How are you?".
console.log(capitalize("i did today's coding challenge... it was fun!!")); // should return "I did today's coding challenge... It was fun!!".
console.log(capitalize("crazy!!!strange???unconventional...sentences.")); // should return "Crazy!!!Strange???Unconventional...Sentences.".
console.log(
  capitalize(
    "there's a space before this period . why is there a space before that period ?",
  ),
); // should return "There's a space before this period . Why is there a space before that period ?".

/*
Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
*/
