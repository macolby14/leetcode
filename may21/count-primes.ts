function countPrimes(n: number): number {
  if (n === 0 || n === 1) {
    return 0;
  }
  let ct = 0;

  let visited: boolean[] = new Array(n).fill(false);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (visited[i]) {
      continue;
    }

    ct++;

    for (let j = i; j < n; j += i) {
      visited[j] = true;
    }
  }

  return ct;
}
