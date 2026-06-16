function isValidCard(number) {
  const array = number.split("");
  let double = 0;
  let undouble = 0;
  let sum_doubles = [];
  let sum_undoubled = [];

  for (let i = array.length - 2; i >= 0; i -= 2) {
    //console.log(array[i])
    double = Number(array[i]) * 2;
    if (double > 9) {
      double = double - 9;
    }
    sum_doubles.unshift(double);
  }
  //console.log(sum_doubles)

  const totalDouble = sum_doubles.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  }, 0);

  //console.log(totalDouble)

  for (let j = array.length - 1; j >= 0; j -= 2) {
    undouble = Number(array[j]);
    sum_undoubled.unshift(undouble);
  }

  const totalUndouble = sum_undoubled.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  }, 0);

  //console.log(totalUndouble)

  if ((totalUndouble + totalDouble) % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidCard("4532015112830366")); // should return true.
console.log(isValidCard("5425233430109903")); // should return true.
console.log(isValidCard("371449635398431")); // should return true.
console.log(isValidCard("6011111111111117")); // should return true.
console.log(isValidCard("4532015112830367")); // should return false.
console.log(isValidCard("1234567890123456")); // should return false.
console.log(isValidCard("4532015112830368")); // should return false.

/*
Credit Card Validator
Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

Starting from the second-to-last digit, double every other digit moving left.
If doubling a digit results in a number greater than 9, subtract 9.
Sum all the digits (doubled and undoubled).
If the total is divisible by 10, the number is valid.
*/
