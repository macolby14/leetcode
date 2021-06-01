function isPowerOfThree(n: number): boolean {
  /*
    - n is an integer, so don't need to worry about exponents that are less than -1
    - 3^0=1
    - If there is a reminder while diving by 3, it is not an exponent of 3
    
    */

  // Solution with loops
  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }

  if (n == 1) {
    return true;
  }
  return false;
}
