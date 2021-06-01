function findAndReplacePattern(words: string[], pattern: string): string[] {
  const matches: string[] = [];
  for (const word of words) {
    if (isPatternMatch(word, pattern)) {
      matches.push(word);
    }
  }
  return matches;
}

function isPatternMatch(s: string, p: string): boolean {
  if (s.length !== p.length) {
    return false;
  }

  const map = new Map<string, string>(); //pattern to string character
  const seen = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const sC = s[i];
    const pC = p[i];
    if (map.has(pC) || seen.has(sC)) {
      if (map.get(pC) !== sC) {
        return false;
      }
    } else {
      map.set(pC, sC);
      seen.add(sC);
    }
  }
  return true;
}
