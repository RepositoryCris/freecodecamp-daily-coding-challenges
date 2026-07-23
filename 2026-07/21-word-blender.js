function blendWords(word1, word2) {
  return word1;
}

console.log(blendWords("turtle", "toucan")); // should return "turcan".
console.log(blendWords("chipmunk", "flamingo")); // should return "chipingo".
console.log(blendWords("falcon", "pelican")); // should return "falican".
console.log(blendWords("hyena", "iguana")); //should return "hyana".
console.log(blendWords("scorpion", "gorilla")); // should return "scorilla".
console.log(blendWords("platypus", "wolverine")); // should return "platerine".

/*
Word Blender
Given two words, return a new word by combining the first half of the first word with the second half of the second word.

For odd-length words, the first half is the shorter half.
*/
