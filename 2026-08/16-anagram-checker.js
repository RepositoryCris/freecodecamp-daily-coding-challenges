function areAnagrams(str1, str2) {
  const cleanString = (string) => {
    const result = string
      .toLowerCase()
      .replace(/[ ]/g, "")
      .split("")
      .sort()
      .join("");
    return result;
  };

  const r1 = cleanString(str1);
  //console.log(r1)
  const r2 = cleanString(str2);
  //console.log(r2)

  if (r1 === r2) {
    return true;
  } else {
    return false;
  }
}

console.log(areAnagrams("listen", "silent")); // should return true.
console.log(areAnagrams("School master", "The classroom")); // should return true.
console.log(areAnagrams("A gentleman", "Elegant man")); // should return true.
console.log(areAnagrams("Hello", "World")); // should return false.
console.log(areAnagrams("apple", "banana")); // should return false.
console.log(areAnagrams("cat", "dog")); // should return false.
