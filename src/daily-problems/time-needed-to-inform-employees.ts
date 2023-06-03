type QNode = {
  pathSum: number;
  id: number;
};

function numOfMinutes(
  n: number,
  headId: number,
  manager: number[],
  informTime: number[]
): number {
  const graph = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    const currentManager = manager[i];
    if (!graph.has(currentManager)) {
      graph.set(currentManager, []);
    }

    graph.get(currentManager)?.push(i);
  }

  let result = 0;
  const queue: QNode[] = [];

  queue.push({ id: headId, pathSum: informTime[headId] });

  while (queue.length) {
    const { id, pathSum } = queue.pop()!;

    const subordinates = graph.get(id) ?? [];
    // if no subordinates, then we should consider the pathSum we have
    if (!subordinates.length) {
      result = Math.max(result, pathSum);
    }

    for (const subordinate of subordinates) {
      queue.push({
        id: subordinate,
        pathSum: pathSum + informTime[subordinate],
      });
    }
  }

  return result;
}

export { numOfMinutes };
