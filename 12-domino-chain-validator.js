function isValidDominoChain(dominoes) {
  let prev = dominoes[0][1];

  console.log("---------------------------------");
  for (let i = 1; i < dominoes.length; i++) {
    let next = dominoes[i][0];

    console.log("previous", prev, "|||", next);

    if (prev === next) {
      prev = dominoes[i][1];
      console.log("True in iteration:", i);
      continue;
    } else {
      console.log("False in iteration:", i);
      return false;
    }
  }
  return true;
}

console.log(
  isValidDominoChain([
    [1, 3],
    [3, 6],
    [6, 5],
  ]),
);

console.log(
  isValidDominoChain([
    [6, 2],
    [3, 4],
    [4, 1],
  ]),
);

console.log(
  isValidDominoChain([
    [2, 5],
    [5, 6],
    [5, 1],
  ]),
);

console.log(
  isValidDominoChain([
    [4, 3],
    [3, 1],
    [1, 6],
    [6, 6],
    [6, 5],
    [5, 1],
    [1, 1],
    [1, 4],
    [4, 4],
    [4, 2],
  ]),
);
console.log(
  isValidDominoChain([
    [2, 3],
    [3, 3],
    [3, 6],
    [6, 1],
    [1, 4],
    [3, 5],
    [5, 5],
    [5, 4],
    [4, 2],
    [2, 2],
  ]),
);

/*Domino Chain Validator
Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.

Each element in the array represents a domino and will be an array of two numbers from 1 to 6, (inclusive).
For the chain to be valid, the second number of each domino must match the first number of the next domino.
The first number of the first domino and the last number of the last domino don't need to match anything.*/
