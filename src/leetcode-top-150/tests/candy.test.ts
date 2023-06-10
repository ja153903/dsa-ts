import { candy } from "../candy";

describe("Candy", () => {
  it("should pass basic tests", () => {
    expect(candy([1, 0, 2])).toBe(5);
    expect(candy([1, 2, 2])).toBe(4);
    expect(candy([1, 3, 2, 2, 1])).toBe(7);
  });
});
