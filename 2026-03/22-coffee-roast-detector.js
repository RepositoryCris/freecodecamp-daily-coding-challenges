function detectRoast(beans) {
  let lightRoast = 0;
  let mediumRoast = 0;
  let darkRoast = 0;

  for (let bean of beans) {
    if (bean === "'" || bean === '"') {
      lightRoast += 1;
    }
    if (bean === "-") {
      mediumRoast += 1;
    }
    if (bean === ".") {
      darkRoast += 1;
    }
  }
  const roastLevel =
    (lightRoast * 1 + mediumRoast * 2 + darkRoast * 3) / beans.length;

  if (roastLevel < 1.75) {
    return "Light";
  }
  if (roastLevel >= 1.75 && roastLevel <= 2.5) {
    return "Medium";
  }
  if (roastLevel > 2.5) {
    return "Dark";
  }
}

console.log(detectRoast("''-''''''-'-''--''''")); // should return "Light".
console.log(detectRoast(".'-''-''..'''.-.-''-")); // should return "Medium".
console.log(detectRoast("--.''--'-''.--..-.--")); // should return "Medium".
console.log(detectRoast("-...'-......-..-...-")); // should return "Dark".
console.log(detectRoast(".--.-..-......----.'")); // should return "Medium".
console.log(detectRoast("..-..-..-..-....-.-.")); // should return "Dark".
console.log(detectRoast("-'-''''''..-'.''-'.'")); // should return "Light".

/*Coffee Roast Detector
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.*/
