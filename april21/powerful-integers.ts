/*
- Brute force:
- Increase power until gets over, then increase other

- Special cases -> if x or y is 1, all of the powers will just be 1
- If x and y is 1, the answer is 2
- If bound is less than 2 (minimum output), empty array
*/

function powerfulIntegers(x: number, y: number, bound: number): number[] {
  const out = new Set<number>();
  let powA = 0;
  let powB = 0;
  let a = x;
  let b = y;

  if (bound < 2) {
    return [];
  }
  if (x === 1 && y === 1) {
    return [2];
  }
  if (x === 1 || y === 1) {
    a = 1;
    b = x === 1 ? y : x;
  }

  let res = Math.pow(a, powA) + Math.pow(b, powB);
  while (res <= bound) {
    while (res <= bound) {
      out.add(res);
      powB++;
      res = Math.pow(a, powA) + Math.pow(b, powB);
    }
    if (a === 1) {
      break;
    }
    powA++;
    powB = 0;
    res = Math.pow(a, powA) + Math.pow(b, powB);
  }

  return [...out];
}
