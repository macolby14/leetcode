function minCostII(costs: number[][]): number {
  const len = costs.length;
  const k = costs[0].length;

  if (k === 1) {
    return costs.reduce((acc, curr) => acc + curr[0], 0);
  }

  //index of min color
  let minColor = -1;
  let secondMinColor = -1;

  for (let i = 1; i < len; i++) {
    let minColor = -1;
    let secondMinColor = -1;

    for (let j = 0; j < k; j++) {
      if (minColor === -1 || costs[i - 1][j] < costs[i - 1][minColor]) {
        secondMinColor = minColor;
        minColor = j;
      } else if (
        secondMinColor === -1 ||
        costs[i - 1][j] < costs[i - 1][secondMinColor]
      ) {
        secondMinColor = j;
      }
    }

    for (let j = 0; j < k; j++) {
      if (j === minColor) {
        costs[i][j] = costs[i][j] + costs[i - 1][secondMinColor];
      } else {
        costs[i][j] = costs[i][j] + costs[i - 1][minColor];
      }
    }
  }

  // console.log(dp);

  return Math.min(...costs[len - 1]);
}
