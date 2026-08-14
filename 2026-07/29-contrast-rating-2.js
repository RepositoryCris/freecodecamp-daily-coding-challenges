function getContrastRating(l1, l2, isLargeText) {
  let contrastRatio1 = Number(l1);
  let contrastRatio2 = Number(l2);

  if (isNaN(contrastRatio1) || contrastRatio1 < 0) {
    return "invalid input";
  }

  if (isNaN(contrastRatio2) || contrastRatio2 < 0) {
    return "invalid input";
  }

  // Add 0.05 to each
  contrastRatio1 += 0.05;
  contrastRatio2 += 0.05;

  // Divide the lighter (larger) by the darker (smaller)
  const contrastRatio =
    Math.max(contrastRatio1, contrastRatio2) /
    Math.min(contrastRatio1, contrastRatio2);

  const thresholds = isLargeText
    ? { AAA: 4.5, AA: 3.0 }
    : { AAA: 7.0, AA: 4.5 };

  if (contrastRatio >= thresholds.AAA) return "AAA";
  if (contrastRatio >= thresholds.AA) return "AA";

  return "Fail";
}

console.log(getContrastRating(1.0, 0.0, false)); // should return "AAA".
console.log(getContrastRating(0.9015, 0.1364, false)); // should return "AA".
console.log(getContrastRating(0.8965, 0.1628, false)); // should return "Fail".
console.log(getContrastRating(0.7469, 0.0957, true)); // should return "AAA".
console.log(getContrastRating(0.7489, 0.2018, true)); // should return "AA".
console.log(getContrastRating(0.6571, 0.1974, true)); // should return "Fail".

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
