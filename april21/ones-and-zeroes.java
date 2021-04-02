class Solution {

    private int m;
    private int n;
    private int[] oneCts;
    private int[] zeroCts;

    public int findMaxForm(String[] strs, int m, int n) {
        /*
         * Preprocess - get number of 0's and number of 1's in an array L=str.length
         * runtime - O(2^L) - Try all subsets - Some sort of sorting algorithm that
         * weights 0's and 1's may work
         */

        // All sets
        // Recursively (startingInd, workingSet, strs, allSets)
        // Base case is i is > strs.length
        // Look to go through i
        // Add strs[i] to the workingSet
        // Call resurive, increasing i
        // Only really care about 1's and 0's
        // Can do a knapsack like approach and memoize results
        int[][][] memo = new int[strs.length][m + 1][n + 1];
        this.m = m;
        this.n = n;
        this.oneCts = new int[strs.length];
        this.zeroCts = new int[strs.length];

        for (int i = 0; i < strs.length; i++) {
            this.oneCts[i] = countOccurence(strs[i], '1');
            this.zeroCts[i] = countOccurence(strs[i], '0');
        }

        return helper(strs, 0, 0, 0, memo);
    }

    private int helper(String[] strs, int strsInd, int zeroes, int ones, int[][][] memo) {
        if (strsInd == strs.length) {
            return 0;
        }
        if (memo[strsInd][zeroes][ones] != 0) {
            return memo[strsInd][zeroes][ones];
        }

        int max = 0;
        int taken = 0;

        int newZeroes = zeroCts[strsInd] + zeroes;
        int newOnes = oneCts[strsInd] + ones;
        if (newZeroes <= m && newOnes <= n) {
            taken = helper(strs, strsInd + 1, newZeroes, newOnes, memo) + 1;
        }
        int notTaken = helper(strs, strsInd + 1, zeroes, ones, memo);

        memo[strsInd][zeroes][ones] = Math.max(taken, notTaken);
        return memo[strsInd][zeroes][ones];
    }

    private int countOccurence(String s, char target) {
        int ct = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == target) {
                ct++;
            }
        }

        return ct;
    }
}