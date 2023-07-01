import { TreeNode } from "../data-structures-and-algorithms/trees";

function getMinimumDifference(root: TreeNode | null): number {
  // if we have a BST the minimum difference can be found by just looking at
  // the inorder traversal
  const stack = [];
  let prev = null;
  let result = Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop() ?? null;

    if (root) {
      if (prev !== null) {
        result = Math.min(result, Math.abs(prev - root.val));
      }

      prev = root.val;

      root = root.right;
    }
  }

  return result;
}

export { getMinimumDifference };
