import { nextGreatestLetter } from "../find-smallest-letter-greater-than-target";

describe("Find Smallest Letter Greater than Target", () => {
  it("should pass basic case", () => {
    const letters = ["c", "f", "z"];
    const target = "a";

    expect(nextGreatestLetter(letters, target)).toBe("c");
  });
});
