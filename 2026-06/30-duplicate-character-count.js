function duplicateCharacterCount(str1, str2) {
  const set1 = new Set(str1); // Unique characters from first string
  let count = 0;

  for (let char of str2) {
    if (set1.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCharacterCount("aloha", "hei")); // should return 1.
console.log(duplicateCharacterCount("jambo", "bonjour")); // should return 4.
console.log(duplicateCharacterCount("hello", "hola")); // should return 3.
console.log(duplicateCharacterCount("ola", "hej")); // should return 0.
console.log(duplicateCharacterCount("ciao", "konnichiwa")); // should return 5.
console.log(duplicateCharacterCount("merhaba", "xin chao")); // should return 2.
console.log(
  duplicateCharacterCount("hello world", "hello to everyone around the world"),
); // should return 26.

/*
Duplicate Character Count
Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.

*/
