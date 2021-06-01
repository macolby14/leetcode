function maxProfit(prices: number[]): number {
  /* 
DP:
- Want the maximum differencce between two days
- Each day have an option to buy or not buy
- If we bought, take the potential sell price and this become max if this is the best day
- Assume buy on first day
- If price goes higher, assume we sell on this day. Save this result
- If price goes lower, this is the new buy price


- Brute force:
 Buy every day
 Sell every day 
 O(N^2)

*/

  let max = 0;
  let lo = Infinity;
  let hi = -Infinity;

  for (const price of prices) {
    if (price < lo) {
      lo = price;
      hi = price; //can only sell after bought
    }
    if (price > hi) {
      hi = price;
    }
    max = Math.max(hi - lo, max);
  }

  return max;
}
