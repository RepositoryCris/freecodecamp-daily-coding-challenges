function blendWords(word1, word2) {
  const w1 = Math.floor(word1.length / 2);
  //console.log(w1);

  const w2 = Math.floor(word2.length / 2);
  //console.log(w2);

  const half1 = word1.slice(0, w1);
  //console.log(half1);

  const half2 = word2.slice(w2);
  //console.log(half2);

  const blend = half1.concat(half2);

  return blend;
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
