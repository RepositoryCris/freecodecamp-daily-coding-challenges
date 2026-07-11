function fiveDice(dice) {
  const frecuencies = new Map();

  for (let i = 0; i < dice.length; i++) {
    if (frecuencies.has(dice[i])) {
      let count = frecuencies.get(dice[i]);
      frecuencies.set(dice[i], count + 1);
    } else {
      frecuencies.set(dice[i], 1);
    }
  }

  const counts = Array.from(frecuencies.values());
  counts.sort((a, b) => b - a);
  console.log(counts);

  if (counts[0] === 5) {
    return "five of a kind";
  }

  if (counts[0] === 4) {
    return "four of a kind";
  }

  if (counts[0] === 3 && counts[1] === 2) {
    return "full house";
  }

  if (counts[0] === 3) {
    return "three of a kind";
  }

  if (counts[0] === 2 && counts[1] === 1) {
    return "pair";
  }

  if (counts[0] === 1) {
    return "no pair";
  }

  return "dice";
}

console.log(fiveDice([1, 1, 1, 1, 1])); // should return "five of a kind".
console.log(fiveDice([5, 5, 5, 6, 5])); // should return "four of a kind".
console.log(fiveDice([2, 5, 6, 4, 3])); // should return "large straight".
console.log(fiveDice([4, 3, 3, 3, 1])); // should return "three of a kind".
console.log(fiveDice([4, 6, 2, 6, 5])); // should return "pair".
console.log(fiveDice([1, 4, 5, 6, 2])); // should return "no pair".
console.log(fiveDice([1, 3, 4, 6, 2])); // should return "small straight".
console.log(fiveDice([2, 2, 5, 2, 5])); // should return "full house".
console.log(fiveDice([6, 4, 5, 6, 4])); // should return "two pair".

/*
Five Dice
Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:

Hand	Description
"no pair"	No pair or better
"pair"	Two dice with the same value
"two pair"	Two different pairs
"three of a kind"	Three dice with the same value
"small straight"	Four consecutive values
"large straight"	Five consecutive values
"full house"	Three of a kind and a pair
"four of a kind"	Four dice with the same value
"five of a kind"	All five dice with the same value
*/
