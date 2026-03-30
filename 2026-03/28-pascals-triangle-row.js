function pascalRow(n) {
  let array = [];
  array.push(1);

  for (let i = n - 1; i > 0; i--) {
    array.push(1);
    for (let j = array.length - 2; j > 0; j--) {
      array[j] = array[j] + array[j - 1];
    }
  }

  return array;
}

console.log(pascalRow(5)); // should return [1, 4, 6, 4, 1].
console.log(pascalRow(3)); // should return [1, 2, 1].
console.log(pascalRow(1)); // should return [1].
console.log(pascalRow(10)); // should return [1, 9, 36, 84, 126, 126, 84, 36, 9, 1].
console.log(pascalRow(15)); // should return [1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1].

/*
Pascal's Triangle Row
Given an integer n, return the nth row of Pascal's triangle as an array.

In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.

Here's the first 5 rows of the triangle:

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

*/
