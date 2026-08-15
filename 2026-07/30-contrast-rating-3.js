function getContrastRating(rgb1, rgb2, isLargeText) {
  const normalizeTo01 = (rgb) => {
    return rgb.map((channel) => channel / 255);
  };

  const gammaCorrect = (rgb) => {
    return rgb.map((channel) => {
      if (channel <= 0.04045) {
        return channel / 12.92;
      } else {
        return Math.pow((channel + 0.055) / 1.055, 2.4);
      }
    });
  };

  const calculateLuminance = (rgb) => {
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };

  // Apply all transformations
  let luminance1 = calculateLuminance(gammaCorrect(normalizeTo01(rgb1)));
  let luminance2 = calculateLuminance(gammaCorrect(normalizeTo01(rgb2)));

  // Add 0.05 to each
  luminance1 += 0.05;
  luminance2 += 0.05;

  // Divide the lighter (larger) by the darker (smaller)
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  const contrastRatio = lighter / darker;

  const thresholds = isLargeText
    ? { aaa: 4.5, aa: 3.0 }
    : { aaa: 7.0, aa: 4.5 };

  if (contrastRatio >= thresholds.aaa) return "AAA";
  if (contrastRatio >= thresholds.aa) return "AA";

  return "Fail";
}

console.log(getContrastRating([255, 255, 255], [0, 0, 0], false)); // should return "AAA".
console.log(getContrastRating([215, 188, 188], [55, 55, 55], false)); // should return "AA".
console.log(getContrastRating([143, 144, 210], [46, 47, 61], false)); // should return "Fail".
console.log(getContrastRating([167, 167, 210], [53, 10, 53], true)); // should return "AAA".
console.log(getContrastRating([135, 147, 155], [60, 70, 90], true)); // should return "AA".
console.log(getContrastRating([125, 210, 195], [105, 130, 90], true)); // should return "Fail".

/*
Contrast Rating 3
Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

Divide each channel [R, G, B] by 255 to get a value between 0 and 1
Apply the gamma correction formula to each channel:
If the channel value is less than or equal to 0.04045: channel / 12.92
Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B
Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0
*/
