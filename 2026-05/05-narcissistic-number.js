function isNarcissistic(n) {
  const numbers = [];

  const text = String(n);

  for (let number of text) {
    numbers.push(Number(number));
  }

  const total = numbers.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue ** numbers.length);
  }, 0);

  if (total === n) {
    return true;
  } else {
    return false;
  }
}

console.log(isNarcissistic(153)); // should return true.
console.log(isNarcissistic(154)); // should return false.
console.log(isNarcissistic(371)); // should return true.
console.log(isNarcissistic(512)); // should return false.
console.log(isNarcissistic(9)); // should return true.
console.log(isNarcissistic(11)); // should return false.
console.log(isNarcissistic(9474)); // should return true.
console.log(isNarcissistic(6549)); // should return false.
