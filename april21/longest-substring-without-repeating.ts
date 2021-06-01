function lengthOfLongestSubstring(s: string): number {
  /*
    - Subproblem: Given a string, does it have repeating characters
    - Could go through every substring and store the characters in a hash O(n^2)
    - Can take a single character
    - Expand it until we get a repeating character (storing a hash)
    - Then shrink it until no longer has a repeating character
    - Then expand
    */

  let left = 0;
  let right = 0;
  const L = s.length;
  const map = new Map<string, number>();
  let max = 0;

  while (right < L) {
    const newChar = s[right];
    while (map.has(newChar) && map.get(newChar) > 0) {
      const removeChar = s[left];
      map.set(removeChar, 0);
      left++;
    }
    map.set(newChar, 1);
    right++;
    max = Math.max(right - left, max);
  }
  return max;
}
