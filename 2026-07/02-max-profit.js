function getMaxProfit(prices, budget) {
  let minPrice = prices[0];
  let maxProfitPerShare = 0;
  let buyPrice = prices[0];

  // Find max profit per share (must buy before selling)
  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price seen so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // Calculate profit if we sell at current price
    const profit = prices[i] - minPrice;
    if (profit > maxProfitPerShare) {
      maxProfitPerShare = profit;
      buyPrice = minPrice; // Store the buy price that gives this profit
    }
  }

  // If no profit possible, return 0.00
  if (maxProfitPerShare <= 0) return "0.00";

  // Calculate how many whole shares we can buy
  const shares = Math.floor(budget / buyPrice);

  // Total profit = profit per share × number of shares
  // Round down to nearest cent
  const totalProfit = Math.floor(maxProfitPerShare * shares * 100) / 100;

  return totalProfit.toFixed(2);
}

// Test cases
console.log(getMaxProfit([5, 6], 50)); // "10.00"
console.log(getMaxProfit([8, 2, 5, 10], 20)); // "80.00"
console.log(getMaxProfit([4, 5, 3, 6], 20)); // "18.00"
console.log(getMaxProfit([54.4, 51.22, 53.99, 50.28, 53.01, 52.84], 200)); // "8.31"
console.log(getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80)); // "0.00"
console.log(
  getMaxProfit(
    [121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33],
    1230.25,
  ),
); // "73.80"

/*
Max Profit
Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

You may only sell after you buy.
You can only buy whole shares.
Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.
*/
