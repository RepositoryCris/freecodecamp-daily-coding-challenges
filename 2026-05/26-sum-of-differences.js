function sumOfDifferences(arr) {
  let sum = 0;
  let next = 0;
  let prev = arr[0];

  for (let i = 1; i < arr.length; i++) {
    next = arr[i];
    sum += next - prev;
    prev = next;
  }
  return sum;
}

console.log(sumOfDifferences([1, 3, 4])); // should return 3.
console.log(sumOfDifferences([5, -3, 3, 9, 10])); // should return 5.
console.log(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7])); // should return -16.
console.log(
  sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]),
); // should return 25.

/*
Sum of Differences
Given an array of numbers, return the sum of the differences between each number and the one that follows it.

For example, given [1, 3, 4], return 3 (2 + 1).
*/
