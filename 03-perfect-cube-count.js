function countPerfectCubes(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  // Find the cube roots of the boundaries
  let startRoot = Math.ceil(Math.cbrt(start));
  let endRoot = Math.floor(Math.cbrt(end));

  // Count all integers between these roots (inclusive)
  return Math.max(0, endRoot - startRoot + 1);
}

console.log(countPerfectCubes(3, 30));
console.log(countPerfectCubes(1, 30));
console.log(countPerfectCubes(30, 0));
console.log(countPerfectCubes(-64, 64));
console.log(countPerfectCubes(9214, -8127));

/*Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not garanteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.*/
