function getCapturedValue(pieces) {
  let captures = {
    p: { capture: 0, value: 0 },
    r: { capture: 0, value: 0 },
    n: { capture: 0, value: 0 },
    b: { capture: 0, value: 0 },
    q: { capture: 0, value: 0 },
    k: { capture: 0, value: 0 },
  };

  for (let piece of pieces) {
    if (piece === "K") {
      captures.k.capture += 1;
    }
    if (piece === "P") {
      captures.p.capture += 1;
    }
    if (piece === "R") {
      captures.r.capture += 1;
    }
    if (piece === "N") {
      captures.n.capture += 1;
    }
    if (piece === "B") {
      captures.b.capture += 1;
    }
    if (piece === "Q") {
      captures.q.capture += 1;
    }
  }

  if (captures.k.capture === 0) {
    return "Checkmate";
  }

  captures.p.value = (8 - captures.p.capture) * 1;
  captures.r.value = (2 - captures.r.capture) * 5;
  captures.n.value = (2 - captures.n.capture) * 3;
  captures.b.value = (2 - captures.b.capture) * 3;
  captures.q.value = (1 - captures.q.capture) * 9;
  captures.k.value = (1 - captures.k.capture) * 0;

  let value = 0;
  Object.values(captures).forEach((item) => {
    value = item.value + value;
  });

  return value;
}

console.log(
  getCapturedValue([
    "P",
    "P",
    "P",
    "P",
    "P",
    "P",
    "R",
    "R",
    "N",
    "B",
    "Q",
    "K",
  ]),
);

console.log(getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"])); // Should return 26

console.log(
  getCapturedValue([
    "K",
    "P",
    "P",
    "N",
    "P",
    "P",
    "R",
    "P",
    "B",
    "P",
    "N",
    "B",
  ]),
); // Should return 16

console.log(
  getCapturedValue([
    "P",
    "Q",
    "N",
    "P",
    "P",
    "B",
    "K",
    "P",
    "R",
    "R",
    "P",
    "P",
    "B",
    "P",
  ]),
); // Should return 4

console.log(getCapturedValue(["P", "K"])); // Should return 38

console.log(
  getCapturedValue([
    "N",
    "P",
    "P",
    "B",
    "K",
    "P",
    "Q",
    "N",
    "P",
    "P",
    "R",
    "R",
    "P",
    "P",
    "P",
    "B",
  ]),
); // Should return 0

console.log(
  getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]),
); // Should return "Checkmate"

/*Captured Chess Pieces
Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	"P"	8	1
Rook	"R"	2	5
Knight	"N"	2	3
Bishop	"B"	2	3
Queen	"Q"	1	9
King	"K"	1	0
The given array will only contain the abbreviations above.
Any of the 16 pieces not included in the given array have been captured.
Return the total value of all captured pieces, unless...
If the King has been captured, return "Checkmate".*/
