function minPairSum(nums: number[]): number {
  let maxPair = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length / 2; i++) {
    maxPair = Math.max(maxPair, nums[i] + nums[nums.length - 1 - i]);
  }
  return maxPair;
}
