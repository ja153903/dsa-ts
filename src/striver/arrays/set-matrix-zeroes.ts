/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length,
    cols = matrix[0].length;
  const transformedRows = new Set<number>();
  const transformedCols = new Set<number>();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        transformedRows.add(row);
        transformedCols.add(col);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (transformedRows.has(row) || transformedCols.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}

export { setZeroes };
