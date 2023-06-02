import { MinPriorityQueue } from "@datastructures-js/priority-queue";

type PriorityQueueNode = {
  count: number;
  value: number;
};

function topKFrequent(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();

  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  const priorityQueue = new MinPriorityQueue<PriorityQueueNode>(
    (node) => node.count
  );

  for (const [value, count] of counter.entries()) {
    priorityQueue.enqueue({ value, count });
    if (priorityQueue.size() > k) {
      priorityQueue.dequeue();
    }
  }

  return priorityQueue.toArray().map(({ value }) => value);
}

export { topKFrequent };
