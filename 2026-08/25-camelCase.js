function toCamelCase(s) {
  const words = [];
  let currentWord = "";

  // Split into words
  for (const char of s) {
    if (char === " " || char === "-" || char === "_") {
      if (currentWord) {
        words.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord += char;
    }
  }
  if (currentWord) words.push(currentWord);

  // Transform to camelCase
  return words
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

console.log(toCamelCase("hello world")); // should return "helloWorld".
console.log(toCamelCase("HELLO WORLD")); // should return "helloWorld".
console.log(toCamelCase("secret agent-X")); // should return "secretAgentX".
console.log(toCamelCase("FREE cODE cAMP")); // should return "freeCodeCamp".
console.log(
  toCamelCase(
    "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk",
  ),
); // should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".

/*
camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
*/
