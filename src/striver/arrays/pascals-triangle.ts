function generate(numRows: number): number[][] {
  const result = Array.from({ length: numRows }).map((_value, index) =>
    new Array(index + 1).fill(1)
  );

  if (numRows <= 2) {
    return result;
  }

  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }

  return result;
}

export { generate };
