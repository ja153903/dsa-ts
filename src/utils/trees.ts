import {
  TreeNode,
  inOrderTraversal,
  postOrderTraversal,
  preOrderTraversal,
} from "../data-structures/trees";

export class TreeHelper {
  static convertArrayIntoBalancedBinaryTree(
    numbers: number[],
    start: number = 0,
    end: number = numbers.length
  ): TreeNode | null {
    if (start >= end) {
      return null;
    }

    const mid = start + Math.floor((end - start) / 2);

    const root = new TreeNode(numbers[mid]);

    root.left = TreeHelper.convertArrayIntoBalancedBinaryTree(
      numbers,
      start,
      mid
    );
    root.right = TreeHelper.convertArrayIntoBalancedBinaryTree(
      numbers,
      mid + 1,
      end
    );

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
