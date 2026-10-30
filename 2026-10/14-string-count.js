function count(text, pattern) {
  return text;
}

console.log(count("abcdefg", "def")); // should return 1.
console.log(count("hello", "world")); // should return 0.
console.log(count("mississippi", "iss")); // should return 2.
console.log(count("she sells seashells by the seashore", "sh")); // should return 3.
console.log(count("101010101010101010101", "101")); // should return 10.

/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
*/
