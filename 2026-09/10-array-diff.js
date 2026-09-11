function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const diff = [];

  for (const item of set1) if (!set2.has(item)) diff.push(item);
  for (const item of set2) if (!set1.has(item)) diff.push(item);

  return diff.sort();
}

console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])); // should return ["cherry"].
console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])); // should return ["cherry"].
console.log(
  arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]),
); // should return ["eight", "four", "six", "two"].
console.log(
  arrayDiff(
    ["two", "four", "five", "eight"],
    ["one", "two", "three", "four", "seven", "eight"],
  ),
); // should return ["five", "one", "seven", "three"].
console.log(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])); // should return ["freeCodeCamp", "rocks"].

/*
Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
*/
