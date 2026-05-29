function getPizzasToOrder(hoursWorked) {
  /*
  input: array of hours worked today per person
  output: return the number of pizzas to order for a pizza party
  */

  const sliceCount = hoursWorked.map((hour) =>
    Math.max(2, Math.ceil(hour / 3)),
  );
  //console.log(sliceCount)
  //person min 2 slices
  //pizza 8 slices
  const totalSlices = sliceCount.reduce((acc, curr) => acc + curr, 0);

  //console.log(totalSlices);

  const pizzas = Math.ceil(totalSlices / 8);

  //console.log(pizzas);

  return pizzas;
}

console.log(getPizzasToOrder([8, 8, 8])); // should return 2.
console.log(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10])); // should return 3.
console.log(getPizzasToOrder([1, 2, 3, 4, 5])); // should return 2.
console.log(getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8])); // should return 3.
console.log(getPizzasToOrder([9, 9, 6])); // should return 1.
console.log(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0])); // should return 5.

/*
Pizza Party
Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.

Divide each person's hours worked by 3 to get their slice count.
You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
Each person gets a minimum of two slices.
Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.s
*/
