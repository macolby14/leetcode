function numTeams(rating: number[]): number {
  const dp: [number, number][] = [...new Array(rating.length)].map((_) => [
    0, 0,
  ]);
  //dp[x][0] is the counts of increasing series
  //dp[x][1] is tje counts of decreasing series

  let ct = 0;

  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        // increaese the ct if j>i
        dp[j][0]++;
        //if there is already do, then i will be the middle index in a series
        ct += dp[i][0];
      }
      if (rating[i] > rating[j]) {
        dp[j][1]++;
        ct += dp[i][1];
      }
    }
  }

  return ct;
}
