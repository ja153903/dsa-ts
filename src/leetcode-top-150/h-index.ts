function hIndex(citations: number[]): number {
  const n = citations.length;
  const counts = new Array<number>(n + 1).fill(0);

  for (const citation of citations) {
    if (citation >= n) {
      counts[n]++;
    } else {
      counts[citation]++;
    }
  }

  let numPapersByCitation = 0;

  for (let i = n; i >= 0; i--) {
    numPapersByCitation += counts[i];

    // This denotes that there are at least k papers
    // that have at least i citations where k >= i
    if (numPapersByCitation >= i) {
      return i;
    }
  }

  return 0;
}

export { hIndex };
