function truncateText(inputText) {
  // Character width mapping
  const charWidthMap = {
    ilI: 1,
    fjrt: 2,
    abcdeghkmnopqrstuvwxyzJL: 3,
    ABCDEFGHKMNOPQRSTUVWXYZ: 4,
    " ": 2,
    ".": 1,
  };

  // Helper: get width of a single character
  function getCharWidth(char) {
    for (let group in charWidthMap) {
      if (group.includes(char)) return charWidthMap[group];
    }
    return 0; // fallback for unexpected characters
  }

  // Helper: calculate total width of a string
  function calculateWidth(text) {
    return [...text].reduce((sum, char) => sum + getCharWidth(char), 0);
  }

  const maxWidth = 50;
  const ellipsis = "...";
  const ellipsisWidth = calculateWidth(ellipsis);

  const textWidth = calculateWidth(inputText);

  // Case 1: Fits within max width → return unchanged
  if (textWidth <= maxWidth) return inputText;

  // Case 2: Needs truncation
  let truncatedText = "";
  let currentWidth = 0;

  for (let char of inputText) {
    const charWidth = getCharWidth(char);

    // Stop if adding this char + ellipsis would exceed max width
    if (currentWidth + charWidth + ellipsisWidth > maxWidth) break;

    truncatedText += char;
    currentWidth += charWidth;
  }

  return truncatedText + ellipsis;
}

console.log(truncateText("The quick brown fox")); // should return "The quick brown f...".
console.log(truncateText("The silky smooth sloth")); // should return "The silky smooth s...".
console.log(truncateText("THE LOUD BRIGHT BIRD")); // should return "THE LOUD BRIG...".
console.log(truncateText("The fast striped zebra")); // should return "The fast striped z...".
console.log(truncateText("The big black bear")); // should return "The big black bear".

/*Truncate the Text 2
Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

Letters	Width
"ilI"	1
"fjrt"	2
"abcdeghkmnopqrstuvwxyzJL"	3
"ABCDEFGHKMNOPQRSTUVWXYZ"	4
The table above includes all upper and lower case letters. Additionally:

Spaces (" ") have a width of 2

Periods (".") have a width of 1

If the given string is 50 units or less, return the string as-is, otherwise

Truncate the string and add three periods at the end ("...") so it's total width, including the three periods, is as close as possible to 60 units without going over.*/
