import { isSubsequence } from "../is-subsequence";

describe("Is Subsequence", () => {
  it("should pass a basic test", () => {
    let s = "abc",
      t = "ahbgdc";
    expect(isSubsequence(s, t)).toBeTruthy();
  });

  it("should pass another basic test", () => {
    let s = "axc",
      t = "ahbgdc";
    expect(isSubsequence(s, t)).toBeFalsy();
  });

  it("should pass with empty strings", () => {
    let s = "",
      t = "";
    expect(isSubsequence(s, t)).toBeTruthy();
  });
});
