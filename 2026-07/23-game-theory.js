function playGame(p1, p2) {
  let score1 = 0;
  let score2 = 0;

  // Both strings are equal length, so we can iterate over either
  for (let i = 0; i < p1.length; i++) {
    const move1 = p1[i];
    const move2 = p2[i];

    if (move1 === "C" && move2 === "C") {
      // Both cooperate
      score1 += 3;
      score2 += 3;
    } else if (move1 === "D" && move2 === "D") {
      // Both defect
      score1 += 1;
      score2 += 1;
    } else if (move1 === "D" && move2 === "C") {
      // Player 1 defects, Player 2 cooperates
      score1 += 5;
      score2 += 0;
    } else if (move1 === "C" && move2 === "D") {
      // Player 1 cooperates, Player 2 defects
      score1 += 0;
      score2 += 5;
    }
  }

  return [score1, score2];
}

// Test cases
console.log(playGame("CCCC", "CCCC")); // should return [12, 12]
console.log(playGame("DDDD", "DDDD")); // should return [4, 4]
console.log(playGame("CCDD", "CDDD")); // should return [5, 10]
console.log(playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD")); // should return [24, 34]
console.log(playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC")); // should return [66, 21]

/*

Game Theory
Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].

The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
If both players cooperate, each scores 3.
If both players defect, each scores 1.
If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

*/
