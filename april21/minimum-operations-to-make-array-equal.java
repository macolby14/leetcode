class Solution {
    public int minOperations(int n) {

        // https://leetcode.com/problems/minimum-operations-to-make-array-equal/

        /*
         * Arrays look like: n=1, 1 -> 1 n=2, 1 3 -> 1 n=3, 1 3 5 -> 2 n=4, 1 3 5 7 -> 4
         * n=5, 1 3 5 7 9 -> 5
         * 
         * Go through (2*i)+1 -> subtract from n
         */

        int minOps = 0;

        for (int i = 0; i < n; i++) {
            int val = 2 * i + 1; // 1,3,5,7,9...
            minOps += Math.abs(val - n);
        }

        return minOps / 2;

    }
}
