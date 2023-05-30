import { isAnagram } from "../valid-anagram";

describe("Valid Anagram", () => {
  it("should pass a basic case", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
    expect(isAnagram("rat", "car")).toBeFalsy();
  });
});
