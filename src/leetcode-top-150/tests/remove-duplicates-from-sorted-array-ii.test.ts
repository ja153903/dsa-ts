import { removeDuplicates } from "../remove-duplicates-from-sorted-array-ii";

describe("Remove Duplicates from Sorted Array II", () => {
  it("should pass basic tests", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicates(nums)).toBe(5);
  });
});
