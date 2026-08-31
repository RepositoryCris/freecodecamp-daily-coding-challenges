function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates].sort((a, b) => a - b);
}

console.log(findDuplicates([1, 2, 3, 4, 5])); // should return [].
console.log(findDuplicates([1, 2, 3, 4, 1, 2])); // should return [1, 2].
console.log(
  findDuplicates([
    2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
  ]),
); // should return [-6, 0, 2, 4, 5, 23].

/*
Array Duplicates
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.
 */
