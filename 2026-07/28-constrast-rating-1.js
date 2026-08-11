function getContrastRating(ratio, isLargeText) {
  const contrastRatio = Number(ratio);

  if (isNaN(contrastRatio) || contrastRatio < 0) {
    return "Invalid input";
  }

  const thresholds = isLargeText
    ? { AAA: 4.5, AA: 3.0 }
    : { AAA: 7.0, AA: 4.5 };

  if (contrastRatio >= thresholds.AAA) return "AAA";
  if (contrastRatio >= thresholds.AA) return "AA";
  return "Fail";
}

console.log(getContrastRating("7.5", false)); // should return "AAA".
console.log(getContrastRating("4.8", false)); // should return "AA".
console.log(getContrastRating("4.2", false)); // should return "Fail".
console.log(getContrastRating("4.5", true)); // should return "AAA".
console.log(getContrastRating("3.0", true)); // should return "AA".
console.log(getContrastRating("2.7", false)); // should return "Fail".

/*
Contrast Rating 1
Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0
*/
