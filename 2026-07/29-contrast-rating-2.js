function getContrastRating(l1, l2, isLargeText) {
  return l1;
}

/*
Contrast Rating 2
Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0
*/

console.log(getContrastRating(1.0, 0.0, false)); // should return "AAA".
console.log(getContrastRating(0.9015, 0.1364, false)); // should return "AA".
console.log(getContrastRating(0.8965, 0.1628, false)); // should return "Fail".
console.log(getContrastRating(0.7469, 0.0957, true)); // should return "AAA".
console.log(getContrastRating(0.7489, 0.2018, true)); // should return "AA".
console.log(getContrastRating(0.6571, 0.1974, true)); // should return "Fail".
