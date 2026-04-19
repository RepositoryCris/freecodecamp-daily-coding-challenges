function findSum(arr, target) {
  function backtrack(remainingTarget, startIndex, currentPath) {
    // Base Case: Target reached and we have at least 2 numbers
    if (remainingTarget === 0 && currentPath.length >= 2) {
      return currentPath;
    }

    // Explore remaining elements
    for (let i = startIndex; i < arr.length; i++) {
      const num = arr[i];

      // Choose the number
      const result = backtrack(remainingTarget - num, i + 1, [
        ...currentPath,
        num,
      ]);

      // If a valid subset was found deeper in the tree, return it immediately
      if (result) return result;
    }

    return null;
  }

  // Initial call
  const finalResult = backtrack(target, 0, []);

  return finalResult || "Sum not found";
}

console.log(findSum([1, 3, 5, 7], 6)); // should return [1, 5].
console.log(findSum([1, 2, 3, 4, 5], 5)); // should return [1, 4].
console.log(findSum([1, 2, 3, 4, 5], 6)); // should return [1, 2, 3].
console.log(findSum([-1, -2, 3, 4], 1)); // should return [-1, -2, 4].
console.log(findSum([3, 1, 4, 1, 5, 9, 2, 6], 10)); // should return [3, 1, 4, 2].
console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)); // should return [1, 2, 3, 5, 9].
console.log(findSum([7, 9, 4, 2, 5], 10)); // should return "Sum not found".

/*
Array Sum Finder
Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.

The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
Each number in the array may only be used once.
If no valid subset exists, return "Sum not found".
Return the matching numbers as an array in the order they appear in the original array.
*/
