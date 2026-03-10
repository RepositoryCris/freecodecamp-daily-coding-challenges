//First solution using for loop
function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i] + total;
  }
  numbers = total;
  return numbers;
}

/*Second solution using reduce()
/*const sumArray = numbers => numbers.reduce((total, num) => total + num, 0);*/

console.log(sumArray([1, 2, 3, 4, 5]));

console.log(sumArray([42]));

console.log(sumArray([5, -2, 7, -3]));

console.log(sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]));

console.log(sumArray([0, 0]));
