function candy(ratings: number[]): number {
  const candyCount = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyCount[i] = candyCount[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candyCount[i - 1] = Math.max(candyCount[i] + 1, candyCount[i - 1]);
    }
  }

  return candyCount.reduce((acc, value) => acc + value);
}

export { candy };
