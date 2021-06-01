function groupAnagrams(strs: string[]): string[][] {
  /*
    - an anagram is a group if all the letters are the same
    - could create a map of each word O(L) to go through each letter
    - represent each map as an array of 26 entries
    - then compare all maps, take O(n^2)
    - sort 2d array to sort all maps
    - could instead sort all maps in O(nlog(n))
    - could sort all letters in a word O(Llog(L))
    - then sort all words in O(nlog(n))
    */

  //create map using array
  const N = strs.length;

  const aCode = "a".charCodeAt(0);

  //map will point to the original word and the freq map for the word
  const maps: [number[], string][] = new Array(N)
    .fill(0)
    .map(() => [new Array(26).fill(0), ""]);
  for (let i = 0; i < N; i++) {
    const word = strs[i];
    maps[i][1] = word;
    for (const c of word) {
      const charVal: number = c.charCodeAt(0);
      const currVal = maps[i][0][charVal - aCode]++;
    }
  }

  //sort by the freq map
  maps.sort(compare);

  //if the freq maps are the same
  const out: string[][] = [];
  let currGroup = [maps[0][1]];
  for (let i = 1; i < N; i++) {
    //if it is the same as the last one, add it to the current group
    if (compare(maps[i], maps[i - 1]) === 0) {
      currGroup.push(maps[i][1]);
    } else {
      //else add the previous group to the output, start a new group, and add it to new group
      out.push(currGroup);
      currGroup = [maps[i][1]];
    }
  }

  out.push(currGroup);
  return out;
}

function compare(a: [number[], string], b: [number[], string]): number {
  for (let i = 0; i < a[0].length; i++) {
    if (a[0][i] > b[0][i]) {
      return -1;
    }
    if (a[0][i] < b[0][i]) {
      return 1;
    }
  }
  return 0;
}
