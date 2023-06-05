import { TreeHelper } from "../trees";

describe("TreeHelper", () => {
  describe("convertArrayIntoBalancedBinaryTree", () => {
    it("should pass a simple case", () => {
      const numbers = [1, 2, 3];
      const root = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);

      expect(root?.val).toBe(2);
      expect(root?.left?.val).toBe(1);
      expect(root?.right?.val).toBe(3);
    });
  });

  describe("toInOrderArray", () => {
    it("should pass sample case", () => {
      const numbers = [1, 2, 3];
      const root = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);

      const result = TreeHelper.toInOrderArray(root);
      expect(result).toStrictEqual([1, 2, 3]);
    });

    it("should pass another case", () => {
      const numbers = [1, 2, 3, 4, 5];
      const root = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);

      const result = TreeHelper.toInOrderArray(root);
      expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("should pass a larger case", () => {
      const numbers = [10, 9, 8, 7, 6, 5, 1, 2, 3, 4];
      const root = TreeHelper.convertArrayIntoBalancedBinaryTree(numbers);

      const result = TreeHelper.toInOrderArray(root);
      expect(result).toStrictEqual([10, 9, 8, 7, 6, 5, 1, 2, 3, 4]);
    });
  });
});
