function isFlat(arr) {
  return !arr.some(Array.isArray);
}

console.log(isFlat([1, 2, 3, 4]));
console.log(isFlat([1, [2, 3], 4]));
console.log(isFlat([1, 0, false, true, "a", "b"]));
console.log(isFlat(["a", [0], "b", true]));
console.log(isFlat([1, [2, [3, [4, [5]]]], 6]));
