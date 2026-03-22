function decodeQr(qrCode) {
  // 1. Convert to a 2D Array of characters for easier manipulation
  let grid = qrCode.map((row) => row.split(""));

  // 2. Helper to rotate the grid 90 degrees clockwise
  const rotate90 = (m) => m[0].map((_, i) => m.map((row) => row[i]).reverse());

  // 3. Helper to check if markers are in correct "Standard" positions
  // Standard: 2x2 of '1's at [0,0], [0,4], and [4,0]
  const isCorrect = (m) => {
    const isMarker = (r, c) =>
      m[r][c] === "1" &&
      m[r][c + 1] === "1" &&
      m[r + 1][c] === "1" &&
      m[r + 1][c + 1] === "1";

    return isMarker(0, 0) && isMarker(0, 4) && isMarker(4, 0);
  };

  // 4. Rotate until we find the correct orientation
  for (let i = 0; i < 4; i++) {
    if (isCorrect(grid)) break;
    grid = rotate90(grid);
  }

  // 5. Extract data by skipping the marker coordinates
  let result = "";
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      const inTopLeft = r < 2 && c < 2;
      const inTopRight = r < 2 && c > 3;
      const inBottomLeft = r > 3 && c < 2;

      if (!inTopLeft && !inTopRight && !inBottomLeft) {
        result += grid[r][c];
      }
    }
  }

  return result;
}

console.log(
  decodeQr(["110011", "110011", "000000", "000000", "110000", "110001"]),
); // should return "000000000000000000000001".
console.log(
  decodeQr(["100011", "000011", "000000", "000000", "110011", "110011"]),
); // should return "000000000000000000000001".
console.log(
  decodeQr(["110011", "111111", "010000", "110000", "110011", "110100"]),
); // should return "001101000011000000110100".
console.log(
  decodeQr(["011011", "101011", "101000", "100010", "110011", "111011"]),
); // should return "010001000100010101010110".
console.log(
  decodeQr(["111100", "110001", "100011", "001101", "110011", "110011"]),
); // should return "010000100100100101001110".

/*QR Decoder
Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.

The QR code may be given in any rotation of 90 degree increments.
A correctly oriented code has a 2x2 group of 1's (orientation markers) in the bottom-left, top-left, and top-right corners.
The three 2x2 orientation markers are not part of the binary data.
The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
A code will always have exactly one valid orientation.
For example, given:

[
  "110011",
  "110011",
  "000000",
  "000000",
  "110000",
  "110001"
]
or given the same code with a different orientation:

[
  "110011",
  "110011",
  "000000",
  "000000",
  "000011",
  "100011"
]
Return "000000000000000000000001", all the binary data excluding the three 2x2 orientation markers.

*/
