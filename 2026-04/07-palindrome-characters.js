function palindromeLocator(str) {
  const isPalindrome = str.split("").reverse().join("");
  let middle = 0;
  //console.log(isPalindrome);
  if (str === isPalindrome) {
    if (str.length % 2 === 0) {
      middle = str.length / 2;
      return str[middle - 1] + str[middle];
    } else if (str.length % 2 === 1) {
      middle = Math.floor(str.length / 2);
      return str[middle];
    }
  } else {
    return "none";
  }
}

console.log(palindromeLocator("racecar")); // should return "e".
console.log(palindromeLocator("level")); // should return "v".
console.log(palindromeLocator("freecodecamp")); // should return "none".
console.log(palindromeLocator("noon")); // should return "oo".
console.log(palindromeLocator("11100111")); // should return "00".

/*
Palindrome Characters
Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

A palindrome is a string that is the same forward and backward.
If it's not a palindrome, return "none".
*/
