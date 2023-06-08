function countNegatives(grid: number[][]): number {
  const row = grid.length - 1,
    col = grid[0].length - 1;
  let result = 0;

  const visited = new Set<string>();
  const queue: [number, number][] = [];
  queue.push([row, col]);

  while (queue.length) {
    const front = queue.shift();
    if (front) {
      const r = front[0];
      const c = front[1];

      if (grid[r][c] < 0) {
        result++;
      }

      const up = `${r - 1},${c}`;
      const down = `${r},${c - 1}`;

      if (!visited.has(up) && r - 1 >= 0) {
        queue.push([r - 1, c]);
        visited.add(up);
      }

      if (!visited.has(down) && c - 1 >= 0) {
        queue.push([r, c - 1]);
        visited.add(down);
      }
    }
  }

  return result;
}

export { countNegatives };
