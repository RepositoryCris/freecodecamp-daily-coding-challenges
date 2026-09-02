function generateHex(color) {
  const randomColorsDec = [];
  let r = "";
  let g = "";
  let b = "";

  if (color !== "red" && color !== "green" && color !== "blue")
    return "Invalid color";

  const generateRandomHex = () => {
    return Math.floor(Math.random() * 16).toString(16);
  };

  const generateRandomHexPairs = () => {
    const first = generateRandomHex();
    const second = generateRandomHex();
    return first + second;
  };

  // Generate 3 random hex pairs
  for (let i = 0; i < 3; i++) {
    const pair = generateRandomHexPairs();
    const decimal = parseInt(pair, 16);
    randomColorsDec.push(decimal);
  }

  // Sort descending
  const colors = randomColorsDec.sort((a, b) => b - a);

  // Convert to 2-digit hex with padding
  const hexColors = colors.map((item) => {
    return item.toString(16).padStart(2, "0").toUpperCase();
  });

  // Assign based on dominant color
  if (color === "red") {
    r = hexColors[0]; // highest
    g = hexColors[1]; // middle
    b = hexColors[2]; // lowest
  } else if (color === "green") {
    r = hexColors[1]; // middle
    g = hexColors[0]; // highest
    b = hexColors[2]; // lowest
  } else {
    // blue
    r = hexColors[2]; // lowest
    g = hexColors[1]; // middle
    b = hexColors[0]; // highest
  }

  return r + g + b;
}

console.log(generateHex("yellow")); // should return "Invalid color".
console.log(generateHex("red")); // should return a six-character string.
console.log(generateHex("red")); // should return a valid six-character hex color code.
console.log(generateHex("red")); // should return a valid hex color with a higher red value than other colors.
console.log(generateHex("red")); // twice should return two different hex color values where red is dominant.
console.log(generateHex("green")); // twice should return two different hex color values where green is dominant.
console.log(generateHex("blue")); // twice should return two different hex color values where blue is dominant.

/*
Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"
*/
