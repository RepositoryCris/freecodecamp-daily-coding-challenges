function insertIntoArray(arr, value, index) {
  const start = arr.slice(0, index);
  const end = arr.slice(index);
  arr = start.concat(value, end);
  return arr;
}

console.log(insertIntoArray([2, 4, 8, 10], 6, 2));

console.log(insertIntoArray(["the", "quick", "fox"], "brown", 2));

console.log(insertIntoArray([], 0, 0));

console.log(insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5));

/*Array Insertion
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.*/
