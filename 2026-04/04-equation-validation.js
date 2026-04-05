function isValidEquation(equation) {
  const [left, right] = equation.split(" = ");
  const expected = Number(right);

  const tokens = left.split(" ");
  const numbers = tokens.filter((_, i) => i % 2 === 0).map(Number);
  const operators = tokens.filter((_, i) => i % 2 === 1);

  // Apply order of operations: handle * and / first
  let nums = [...numbers];

  let ops = [...operators];

  for (let i = 0; i < ops.length; ) {
    if (ops[i] === "*" || ops[i] === "/") {
      const result =
        ops[i] === "*" ? nums[i] * nums[i + 1] : nums[i] / nums[i + 1];
      nums.splice(i, 2, result);
      ops.splice(i, 1);
    } else {
      i++;
    }
  }

  // Handle + and -
  let result = nums[0];
  for (let i = 0; i < ops.length; i++) {
    result = ops[i] === "+" ? result + nums[i + 1] : result - nums[i + 1];
  }

  return result === expected;
}

console.log(isValidEquation("2 + 2 = 4")); // should return true.
console.log(isValidEquation("2 + 3 - 1 = 4")); // should return true.
console.log(isValidEquation("8 / 2 = 4")); // should return true.
console.log(isValidEquation("10 * 5 = 50")); // should return true.
console.log(isValidEquation("2 - 2 = 0")); // should return true.
console.log(isValidEquation("2 + 9 / 3 = 5")); // should return true.
console.log(isValidEquation("20 - 2 * 3 = 14")); // should return true.
console.log(isValidEquation("2 + 5 = 6")); // should return false.
console.log(isValidEquation("10 - 2 * 3 = 24")); // should return false.
console.log(isValidEquation("3 + 9 / 3 = 4")); // should return false.

/*Equation Validation
Given a string representing a math equation, determine whether it is correct.

The left side may contain up to three positive integers and the operators +, -, *, and /.
The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
The right side will always be a single integer.
Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.*/
