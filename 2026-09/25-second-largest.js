function secondLargest(arr) {
  const numberSet = new Set([...arr]);
  //console.log(numberSet)

  const ordered = [...numberSet];

  ordered.sort((a, b) => b - a);

  return ordered[1];
}

console.log(secondLargest([1, 2, 3, 4])); // should return 3.
console.log(secondLargest([20, 139, 94, 67, 31])); // should return 94.
console.log(secondLargest([2, 3, 4, 6, 6])); // should return 4.
console.log(secondLargest([10, -17, 55.5, 44, 91, 0])); // should return 55.5.
console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])); // should return 0.

/*
2nd Largest
Given an array, return the second largest distinct number.
*/
