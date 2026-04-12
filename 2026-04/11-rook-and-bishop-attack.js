function rookBishopAttack(rook, bishop) {
  // Extract rook position
  const rString = rook.match(/[A-H]/)[0];
  const rNumber = parseInt(rook.match(/\d+/)[0]);

  // Extract bishop position
  const bString = bishop.match(/[A-H]/)[0];
  const bNumber = parseInt(bishop.match(/\d+/)[0]);

  // Convert column letter to number
  function columnToNumber(col) {
    const columns = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
    };
    return columns[col];
  }

  const rColumn = columnToNumber(rString);
  const bColumn = columnToNumber(bString);

  // Check if rook can attack bishop (same row OR same column)
  if (rNumber === bNumber || rColumn === bColumn) {
    return "rook";
  }

  // Check if bishop can attack rook (same diagonal)
  if (Math.abs(rNumber - bNumber) === Math.abs(rColumn - bColumn)) {
    return "bishop";
  }

  return "neither";
}

// Test cases
console.log(rookBishopAttack("A1", "A5")); // should return "rook" ✓
console.log(rookBishopAttack("C3", "F6")); // should return "bishop" ✓
console.log(rookBishopAttack("D4", "D7")); // should return "rook" ✓
console.log(rookBishopAttack("B7", "H1")); // should return "bishop" ✓
console.log(rookBishopAttack("B3", "C5")); // should return "neither" ✓
console.log(rookBishopAttack("G3", "E8")); // should return "neither" ✓
/*Rook and Bishop Attack
Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1
Rooks can move as many squares as they want in a horizontal or vertical direction.
Bishops can move as many squares as they want in any diagonal direction.
One piece can attack another if it can move to the location of that piece.
Return:

"rook" if the rook can attack the bishop.
"bishop" if the bishop can attack the rook.
"neither" if neither piece can attack one another.
*/
