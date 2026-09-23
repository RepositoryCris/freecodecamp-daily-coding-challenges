function isMirror(str1, str2) {
  return str1;
}

console.log(isMirror("helloworld", "helloworld")); // should return false.
console.log(isMirror("Hello World", "dlroW olleH")); // should return true.
console.log(isMirror("RaceCar", "raCecaR")); // should return true.
console.log(isMirror("RaceCar", "RaceCar")); // should return false.
console.log(isMirror("Mirror", "rorrim")); // should return false.
console.log(isMirror("Hello World", "dlroW-olleH")); // should return true.
console.log(isMirror("Hello World", "!dlroW !olleH")); // should return true.

/*
String Mirror
Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.
*/
