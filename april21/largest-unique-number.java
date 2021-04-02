class Solution {
    public int largestUniqueNumber(int[] A) {
        /*
         * Could sort then iterate through. Runtime is nlog(n) Can do a frequency array.
         * Then go down from 1000 to 1 and see if it is present. Technically O(n)
         */
        int[] freq = new int[1001];
        for (int i = 0; i < A.length; i++) {
            freq[A[i]]++;
        }

        for (int i = 1000; i >= 1; i--) {
            if (freq[i] == 1) {
                return i;
            }
        }

        return -1;

    }
}
