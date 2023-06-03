import { removeElement } from "../remove-element";

describe("Remove Element", () => {
  it("should pass a basic case", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });
});
