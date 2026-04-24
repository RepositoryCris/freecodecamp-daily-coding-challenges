function getCleanupScore(items) {
  const values = {
    bottle: 10,
    can: 6,
    bag: 8,
    tire: 35,
    straw: 4,
    cardboard: 3,
    newspaper: 3,
    shoe: 12,
    electronics: 25,
    battery: 18,
    mattress: 38,
  };

  let score = 0;
  let streak = 1;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    // Get base value (handle rare items)
    let base = Array.isArray(item) ? item[1] : values[item];

    // Check if same as previous item (for streak bonus)
    if (i > 0 && items[i] === items[i - 1]) {
      streak++;
    } else {
      streak = 1;
    }

    // Calculate score with streak bonus
    let points = base + (streak - 1);

    // Apply multiplier every 5th item
    if ((i + 1) % 5 === 0) {
      points *= Math.floor((i + 1) / 5) + 1;
    }

    score += points;
  }

  return score;
}

console.log(getCleanupScore(["bottle", "straw", "shoe", "battery"])); // should return 44.
console.log(
  getCleanupScore(["electronics", "straw", "newspaper", "bottle", "bag"]),
); // should return 58.
console.log(
  getCleanupScore([
    "shoe",
    "can",
    "can",
    "can",
    "bottle",
    "bottle",
    "straw",
    "straw",
    "straw",
  ]),
); // should return 79.
console.log(
  getCleanupScore([
    "mattress",
    ["rare", 80],
    "tire",
    "tire",
    "tire",
    ["rare", 95],
  ]),
); // should return 358.
console.log(
  getCleanupScore([
    "bottle",
    "can",
    "can",
    "shoe",
    "shoe",
    ["rare", 56],
    "bottle",
    "bottle",
    "can",
    "can",
    "electronics",
    "bottle",
    ["rare", 48],
    "bottle",
    "can",
    "can",
    "can",
    "can",
    "can",
    "can",
    "can",
  ]),
); // should return 383.

/*
Earth Day Cleanup Crew
Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.

Given items will be one of:

Item	Base Value
"bottle"	10
"can"	6
"bag"	8
"tire"	35
"straw"	4
"cardboard"	3
"newspaper"	3
"shoe"	12
"electronics"	25
"battery"	18
"mattress"	38
A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.

Streak bonus: If the same item appears consecutively, it gets increasing bonus points.

First consecutive occurrence: base value
Second: base value + 1
Third: base value + 2
etc.
Fifth Item Multiplier: Every fifth item collected gets a multiplier.

Fifth item: *2
Tenth item: *3
etc.
Apply the multiplier after calculating any bonuses.
*/
