import { TreeNode } from "../data-structures/trees";

function maxLevelSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let maxSum = Number.NEGATIVE_INFINITY;
  let maxLevel = 0;
  let level = 0;
  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length > 0) {
    let currentSum = 0;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front = queue.shift();
      if (front) {
        currentSum += front.val;

        if (front.left) {
          queue.push(front.left);
        }

        if (front.right) {
          queue.push(front.right);
        }
      }
    }

    level++;

    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxLevel = level;
    }
  }

  return maxLevel;
}

export { maxLevelSum };
