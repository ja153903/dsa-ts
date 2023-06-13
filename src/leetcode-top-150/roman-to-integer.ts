const ROMAN_TO_INT: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  // iterate backwards
  // if previous element is greater than the current element, then we subtract this element
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = ROMAN_TO_INT[s[i]];

    if (i === s.length - 1) {
      result += current;
      continue;
    }

    const previous = ROMAN_TO_INT[s[i + 1]];

    if (current < previous) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

export { romanToInt };
