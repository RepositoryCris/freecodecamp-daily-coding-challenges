function letterDistance(str1, str2) {
  let total = 0;

  for (let i = 0; i < str1.length; i++) {
    const diff = Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i));
    total += Math.min(diff, 26 - diff);
  }

  return total;
}

console.log(letterDistance("abc", "bcd")); // 3
console.log(letterDistance("abc", "xyz")); // 9
console.log(letterDistance("encrypt", "decrypt")); // 10
console.log(letterDistance("algorithm", "codeblock")); // 43
console.log(letterDistance("lobster", "penguin")); // 47
console.log(letterDistance("alligator", "crocodile")); // 55

/*
Letter Distance
Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

The input will only contain lowercase letters
The alphabet is treated as a circle, so the distance between a and z is 1.
*/
