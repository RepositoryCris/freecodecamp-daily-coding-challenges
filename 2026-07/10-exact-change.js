function exactChange(amount) {
  // Coin denominations available
  const coins = [1, 5, 10, 25];

  // dp[i] = number of ways to make amount i
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // Base case: 1 way to make 0 cents

  // For each coin type
  for (const coin of coins) {
    // Update all amounts that can use this coin
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

console.log(exactChange(3)); // 1
console.log(exactChange(9)); // 2
console.log(exactChange(17)); // 6
console.log(exactChange(39)); // 24
console.log(exactChange(61)); // 73
console.log(exactChange(99)); // 213

/*
Exact Change
Given an integer amount in cents, return the number of distinct ways to make exact change using pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
*/
