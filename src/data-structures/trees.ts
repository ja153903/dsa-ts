export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function inOrderTraversal(
  root: TreeNode | null,
  callback: (node: TreeNode) => unknown
) {
  if (root) {
    inOrderTraversal(root.left, callback);
    callback(root);
    inOrderTraversal(root.right, callback);
  }
}

export function preOrderTraversal(
  root: TreeNode | null,
  callback: (node: TreeNode) => unknown
) {
  if (root) {
    callback(root);
    preOrderTraversal(root.left, callback);
    preOrderTraversal(root.right, callback);
  }
}

export function postOrderTraversal(
  root: TreeNode | null,
  callback: (node: TreeNode) => unknown
) {
  if (root) {
    postOrderTraversal(root.left, callback);
    postOrderTraversal(root.right, callback);
    callback(root);
  }
}

export function levelOrderTraversal(
  root: TreeNode | null,
  callback: (node: TreeNode) => unknown
) {
  if (!root) {
    return;
  }

  const queue: Array<TreeNode | null> = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front = queue.pop()!;

      callback(front);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }
  }
}
