function getLowercaseWords(str) {
  const words = str.split(" ");
  //console.log(words);
  const result = [];

  for (let word of words) {
    if (word === word.toLowerCase()) {
      result.push(word);
    }
  }
  return result.join(" ");
}

console.log(getLowercaseWords("hello GOOD world")); // should return "hello world".
console.log(getLowercaseWords("these are all lowercase")); // should return "these are all lowercase".
console.log(getLowercaseWords("less is NoT more")); // should return "less is more".
console.log(getLowercaseWords("DonT eat pizza every OTHER day")); // should return "eat pizza every day".
console.log(
  getLowercaseWords(
    "the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog",
  ),
); // should return "the quick brown fox jumped over the lazy dog".

/*
lowercase words
Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.
*/
