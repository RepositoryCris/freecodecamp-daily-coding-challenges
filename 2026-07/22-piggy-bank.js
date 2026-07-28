function piggyBank(coins) {
  return coins;
}

console.log(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 })); // should return "$1.98".
console.log(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 })); // should return "$0.41".
console.log(piggyBank({ nickels: 8, dimes: 6, quarters: 5 })); // should return "$2.25".
console.log(piggyBank({})); // should return "$0.00".
console.log(piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 })); // should return "$6.76".

/*
Piggy Bank
Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

The object may contain any of the following:

Coin	Value
pennies	$0.01
nickels	$0.05
dimes	$0.10
quarters	$0.25
*/
