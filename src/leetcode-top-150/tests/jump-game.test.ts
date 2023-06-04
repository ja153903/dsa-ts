import { canJump } from "../jump-game";

describe("Jump Game", () => {
  it("should pass some basic cases", () => {
    let nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toBeTruthy();

    nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toBeFalsy();
  });
});
