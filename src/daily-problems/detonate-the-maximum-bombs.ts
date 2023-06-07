type Bomb = [number, number, number];

function maximumDetonation(bombs: Bomb[]): number {
  const graph = new Map<number, number[]>();

  for (let i = 0; i < bombs.length; i++) {
    for (let j = 0; j < bombs.length; j++) {
      if (i === j) {
        continue;
      }

      const dist =
        Math.pow(bombs[i][0] - bombs[j][0], 2) +
        Math.pow(bombs[i][1] - bombs[j][1], 2);
      // if the distance between two points is smaller than or equal to the radius of bomb[i]
      // then this means it can trigger bomb[j]
      if (dist <= bombs[i][2] * bombs[i][2]) {
        if (!graph.has(i)) {
          graph.set(i, []);
        }

        graph.get(i)?.push(j);
      }
    }
  }

  let result = 0;

  function dfs(
    graph: Map<number, number[]>,
    visited: Set<number>,
    path: [number],
    i: number
  ) {
    visited.add(i);
    path[0]++;

    const children = graph.get(i) ?? [];

    for (const child of children) {
      if (visited.has(child)) {
        continue;
      }

      dfs(graph, visited, path, child);
    }
  }

  for (let i = 0; i < bombs.length; i++) {
    const path: [number] = [0];
    const visited = new Set<number>();
    dfs(graph, visited, path, i);
    result = Math.max(result, path[0]);
  }

  return result;
}

// NOTE: Keep this around, but I don't really need this for the solution
function doesBombAreaIntersect(a: Bomb, b: Bomb): boolean {
  // To figure out if two circles intersect, we should check
  // if the distance between the two centers is between the diff and sum of the
  // radii
  const [ax, ay, ar] = a;
  const [bx, by, br] = b;

  const r1 = Math.max(ar, br);
  const r2 = Math.min(ar, br);

  const dist = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
  return r1 - r2 <= dist && dist <= r1 + r2;
}

export { maximumDetonation, doesBombAreaIntersect };
