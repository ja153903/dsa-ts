import { topKFrequent } from "../top-k-frequent-elements";

describe("Top K Frequent", () => {
  it("should pass some simple cases", () => {
    const nums = [1, 1, 1, 2, 2, 3],
      k = 2;
    const result = topKFrequent(nums, k);
    result.sort((a, b) => a - b);

    expect(result).toEqual([1, 2]);
  });
});
