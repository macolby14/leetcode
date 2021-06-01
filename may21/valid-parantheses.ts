function isValid(s: string): boolean {
  /* 
    -use a stack
    -if it is a open brace, add it to the stack
    -if it is a closed brace, pop off the top of the stack
    -if it matches, keep going
    - if it doesn't return false
    -if there are left over open braces, return false
    */

  const st: string[] = [];
  for (const c of s) {
    if (isOpen(c)) {
      st.push(c);
    } else {
      const open = st.pop();
      if (!open || getPair(open) !== c) return false;
    }
  }

  return st.length === 0;
}

function isOpen(s: string): boolean {
  switch (s) {
    case "(":
    case "{":
    case "[":
      return true;
      break;
    default:
      return false;
  }
}

function getPair(s: string): string {
  switch (s) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    default:
      throw new Error("Invalid character: " + s);
  }
}
