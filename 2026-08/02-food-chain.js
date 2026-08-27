function getFoodChain(pairs) {
  // If no pairs, return empty array
  if (pairs.length === 0) return [];

  // Build a map of predator -> prey
  const predatorMap = {};
  const preySet = new Set();

  for (const pair of pairs) {
    const predator = pair[0];
    const prey = pair[1];
    predatorMap[predator] = prey;
    preySet.add(prey);
  }

  // Find the apex predator (never appears as prey)
  let apex = null;
  for (const predator in predatorMap) {
    if (!preySet.has(predator)) {
      apex = predator;
      break;
    }
  }

  // Build the chain
  const chain = [];
  let current = apex;

  while (current && predatorMap[current]) {
    chain.push(current);
    current = predatorMap[current];
  }

  // Add the last prey (bottom of the chain)
  if (current) {
    chain.push(current);
  }

  return chain;
}

console.log(getFoodChain([["cat", "mouse"]])); // should return ["cat", "mouse"].
console.log(
  getFoodChain([
    ["wolf", "deer"],
    ["deer", "grass"],
  ]),
); // should return ["wolf", "deer", "grass"].
console.log(
  getFoodChain([
    ["hawk", "snake"],
    ["snake", "frog"],
    ["frog", "fly"],
  ]),
); // should return ["hawk", "snake", "frog", "fly"].
console.log(
  getFoodChain([
    ["rabbit", "grass"],
    ["fox", "rabbit"],
    ["eagle", "fox"],
  ]),
); // should return ["eagle", "fox", "rabbit", "grass"].
console.log(
  getFoodChain([
    ["seal", "salmon"],
    ["herring", "shrimp"],
    ["orca", "seal"],
    ["shrimp", "plankton"],
    ["salmon", "herring"],
  ]),
); // should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].

/*
Food Chain
Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.

The apex predator is the animal that is never prey to another animal.
Return the chain as an array of strings.
*/
