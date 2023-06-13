function equalPairs(grid: number[][]): number {
  let result = 0;

  const rows = [];
  const cols = [];

  for (let i = 0; i < grid.length; i++) {
    const currentColumnVals = [];

    for (let j = 0; j < grid[0].length; j++) {
      currentColumnVals.push(grid[i][j]);
    }

    rows.push(currentColumnVals.join(","));
  }

  for (let j = 0; j < grid[0].length; j++) {
    const currentRowVals = [];

    for (let i = 0; i < grid.length; i++) {
      currentRowVals.push(grid[i][j]);
    }

    cols.push(currentRowVals.join(","));
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (rows[i] === cols[j]) {
        result++;
      }
    }
  }

  return result;
}

export { equalPairs };
