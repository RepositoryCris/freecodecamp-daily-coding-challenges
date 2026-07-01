function calculateBmi(weight, height) {
  const getBMI = (weight / (height * height)) * 703;
  return getBMI.toFixed(1);
}

console.log(calculateBmi(180, 70)); // should return 25.8.
console.log(calculateBmi(140, 64)); // should return 24.0.
console.log(calculateBmi(160, 76)); // should return 19.5.
console.log(calculateBmi(200, 60)); // should return 39.1.
console.log(calculateBmi(150, 68)); // should return 22.8.

/*
BMI Calculator
Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703.
*/
