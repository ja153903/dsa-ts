import { solve, content } from "../day10";

describe("AOC 2015 - Day 10", () => {
  describe("Part 1", () => {
    it("should pass", () => {
      expect(solve(content ?? "", 40)).toBe(252594);
    });
  });

  describe("Part 2", () => {
    it("should pass", () => {
      expect(solve(content ?? "", 50)).toBe(3579328);
    });
  });
});
