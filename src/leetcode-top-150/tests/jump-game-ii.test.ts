import { jump } from "../jump-game-ii";

describe("Jump Game II", () => {
  it("should pass some simple tests", () => {
    let nums = [2, 3, 1, 1, 4];
    expect(jump(nums)).toBe(2);

    nums = [2, 3, 0, 1, 4];
    expect(jump(nums)).toBe(2);
  });
});
