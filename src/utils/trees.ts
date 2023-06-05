import {
  TreeNode,
  inOrderTraversal,
  postOrderTraversal,
  preOrderTraversal,
} from "../data-structures/trees";

export class TreeHelper {
  static convertArrayIntoBalancedBinaryTree(
    numbers: number[]
  ): TreeNode | null {
    if (numbers.length === 0) {
      return null;
    }

    const root = new TreeNode(numbers.shift()!);

    root.left = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);
    root.right = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);

    return root;
  }

  static toInOrderArray(root: TreeNode | null): number[] {
    const result: number[] = [];

    inOrderTraversal(root, (node) => {
      result.push(node.val);
    });

    return result;
  }

  static toPreOrderArray(root: TreeNode | null): number[] {
    const result: number[] = [];

    preOrderTraversal(root, (node) => {
      result.push(node.val);
    });

    return result;
  }

  static toPostOrderArray(root: TreeNode | null): number[] {
    const result: number[] = [];

    postOrderTraversal(root, (node) => {
      result.push(node.val);
    });

    return result;
  }
}
