/**
 * Calculates the number of distinct ways to climb a staircase
 * taking either 1 or 2 steps at a time.
 *
 * This is essentially the Fibonacci sequence where:
 * - 1 step: 1 way
 * - 2 steps: 2 ways
 * - n steps: ways(n-1) + ways(n-2)
 *
 * @param {number} steps - The total number of stairs to climb
 * @returns {number} The number of distinct climbing ways
 */
function getUniqueClimbs(steps) {
  // Guard clause for invalid input
  if (steps <= 0) return 0;

  // Base cases
  if (steps === 1) return 1;
  if (steps === 2) return 2;

  // Initialize with base values
  let waysForTwoStepsBack = 1; // ways(1)
  let waysForOneStepBack = 2; // ways(2)
  let currentWays = 0;

  // Build up from step 3 to target steps
  for (let currentStep = 3; currentStep <= steps; currentStep++) {
    // Recurrence relation: ways(n) = ways(n-1) + ways(n-2)
    currentWays = waysForOneStepBack + waysForTwoStepsBack;

    // Slide the window forward
    waysForTwoStepsBack = waysForOneStepBack;
    waysForOneStepBack = currentWays;
  }

  return currentWays;
}

console.log(getUniqueClimbs(4)); // should return 5.
console.log(getUniqueClimbs(5)); // should return 8.
console.log(getUniqueClimbs(10)); // should return 89.
console.log(getUniqueClimbs(18)); // should return 4181.
console.log(getUniqueClimbs(29)); // should return 832040.
console.log(getUniqueClimbs(50)); // should return 20365011074.
/*
Unique Stair Climber
Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.
*/
