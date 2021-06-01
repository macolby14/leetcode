function superpalindromesInRange(left: string, right: string): number {
  /*
    10^18 is range
    Find all palindromes to 10^9 -> as square must also be a plaindrome
    - If we iterate through digits to 10^5, we can just repeat the digits
    */

  let ct = 0;

  //manually add single digit numbers
  if (2 >= BigInt(left) && 2 <= BigInt(right)) {
    ct++;
  }
  if (4 >= BigInt(left) && 4 <= BigInt(right)) {
    ct++;
  }
  if (9 >= BigInt(left) && 9 <= BigInt(right)) {
    ct++;
  }

  for (let i = 1; i < 10 ** 5; i++) {
    const leftHalf = i + "";
    const rightHalf = leftHalf.split("").reverse().join("");
    for (let mid = -1; mid < 9; mid++) {
      // do no middle digit first -> so we can break out early if squared is too big
      const midStr = mid === -1 ? "" : mid + "";
      const whole = leftHalf + midStr + rightHalf;
      const n = BigInt(whole);
      const squared = n ** 2n;

      // squared is bigger without a middle digit and will never get smaller
      if (midStr === "" && squared > BigInt(right)) {
        return ct;
      }

      if (
        squared >= BigInt(left) &&
        squared <= BigInt(right) &&
        isPalindrome(squared)
      ) {
        ct++;
        // console.log(squared);
      }
    }
  }

  return ct;
}

function isPalindrome(n: BigInt) {
  const s = n + "";
  const rev = s.split("").reverse().join("");
  if (s === rev) {
    return true;
  }
  return false;
}
