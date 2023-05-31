function groupAnagrams(words: string[]): string[][] {
  const groups = new Map<string, Array<string>>();

  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key)?.push(word);
  }

  return Array.from(groups.values());
}

export { groupAnagrams };
