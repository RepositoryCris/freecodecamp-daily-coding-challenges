function allUnique(str) {
  const uniqueCharacters = [];

  for (let i = 0; i < str.length; i++) {
    if (uniqueCharacters.includes(str[i])) {
      return false;
    }
    uniqueCharacters.push(str[i]);
  }
  return true;
}

console.log(allUnique("abc")); // should return true.
console.log(allUnique("aA")); // should return true.
console.log(allUnique("QwErTy123!@")); // should return true.
console.log(allUnique("~!@#$%^&*()_+")); // should return true.
console.log(allUnique("hello")); // should return false.
console.log(allUnique("freeCodeCamp")); // should return false.
console.log(allUnique("!@#*$%^&*()aA")); // should return false.

/*
Unique Characters
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
*/
