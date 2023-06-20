import { makeArrayIncreasing } from "../make-array-strictly-increasing";

describe("Make Array Strictly Increasing", () => {
  it("should pass basic tests", () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4])).toBe(1);
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1])).toBe(2);
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3])).toBe(-1);
  });
});
