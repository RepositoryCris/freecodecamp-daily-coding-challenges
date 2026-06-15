function sortNumbers(str) {
  const array = str.split(",");
  console.log(array);
  const numbers = array.map((item) => {
    return Number(item);
  });
  console.log(numbers);
  let previous = numbers[0];
  let next = 0;

  for (let i = 1; i < numbers.length; i++) {
    next = numbers[i];
    if (previous < next) {
      numbers[i - 1] = previous;
      numbers[i] = next;
    } else {
      numbers[i] = previous;
      numbers[i - 1] = next;
    }
    previous = next;
  }
  console.log(numbers);
  return numbers;
}

console.log(sortNumbers("3,1,2")); // should return [1, 2, 3].
console.log(sortNumbers("5,3,8,1,9,2")); // should return [1, 2, 3, 5, 8, 9].
console.log(sortNumbers("12,61,49,80,19,50,77,38")); // should return [12, 19, 38, 49, 50, 61, 77, 80].
console.log(sortNumbers("0,6,-19,44,-2,7,0")); // should return [-19, -2, 0, 0, 6, 7, 44].
