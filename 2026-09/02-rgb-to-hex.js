function rgbToHex(rgb) {
  const clean = rgb.match(/(\d+)/g);

  const colorDecNumber = clean.map((color) => Number(color));

  const colorHexNumber = colorDecNumber.map((number) =>
    number.toString(16).padStart(2, "0"),
  );

  return `#${colorHexNumber.join("")}`;
}

console.log(rgbToHex("rgb(255, 255, 255)")); // should return "#ffffff".
console.log(rgbToHex("rgb(1, 11, 111)")); // should return "#010b6f".
console.log(rgbToHex("rgb(173, 216, 230)")); // should return "#add8e6".
console.log(rgbToHex("rgb(79, 123, 201)")); // should return "#4f7bc9".

/*
RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
*/
