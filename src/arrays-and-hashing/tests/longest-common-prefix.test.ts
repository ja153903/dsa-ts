import { longestCommonPrefix } from "../longest-common-prefix";

describe("Longest Common Prefix", () => {
  it("should pass some basic tests", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
