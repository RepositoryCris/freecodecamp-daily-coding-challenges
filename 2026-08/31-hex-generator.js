function generateHex(color) {
  return color;
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
