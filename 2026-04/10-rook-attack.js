function rookAttack(rook1, rook2) {
  const r1String = rook1.match(/[A-h]/)[0];
  const r1Number = rook1.match(/\d+/)[0];
  const r2String = rook2.match(/[A-h]/)[0];
  const r2Number = rook2.match(/\d+/)[0];

  if (r1String === r2String) {
    return true;
  }
  if (r1Number === r2Number) {
    return true;
  }
  console.log(r1String, r1Number, r2String, r2Number);
  return false;
}

console.log(rookAttack("A1", "A8")); // should return true.
console.log(rookAttack("B4", "F4")); // should return true.
console.log(rookAttack("E3", "D4")); // should return false.
console.log(rookAttack("H7", "F6")); // should return false.

/*
Rook Attack
Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1
Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.
*/
