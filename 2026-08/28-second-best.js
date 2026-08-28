function getLaptopCost(laptops, budget) {
  // Step 1: Remove duplicates
  let uniquePrices = [...new Set(laptops)];

  // Step 2: Sort descending (highest to lowest)
  let sorted = uniquePrices.sort((a, b) => b - a);

  // Step 3: Get the second most expensive (if it exists)
  let secondMostExpensive = sorted.length >= 2 ? sorted[1] : null;

  // Step 4: If second most expensive is within budget, return it
  if (secondMostExpensive !== null && secondMostExpensive <= budget) {
    return secondMostExpensive;
  }

  // Step 5: Otherwise, find the most expensive laptop within budget
  let withinBudget = sorted.filter((price) => price <= budget);

  // Step 6: If no laptops within budget, return 0
  if (withinBudget.length === 0) {
    return 0;
  }

  // Step 7: Return the most expensive within budget
  return withinBudget[0];
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900)); // should return 1800
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)); // should return 1800
console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200)); // should return 1899
console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000)); // should return 0
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)); // should return 1400

/*
Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.
*/
