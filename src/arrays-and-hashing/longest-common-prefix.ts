function longestCommonPrefix(strs: string[]): string {
  const result = [];

  const minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (current !== strs[j][i]) {
        return result.join("");
      }
    }

    result.push(current);
  }

  return result.join("");
}

export { longestCommonPrefix };
