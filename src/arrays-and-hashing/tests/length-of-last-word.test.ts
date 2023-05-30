import { lengthOfLastWord } from "../length-of-last-word";

describe("Length of Last Word", () => {
  it("should pass a basic test case", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
