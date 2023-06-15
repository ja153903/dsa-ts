import { content, part1, part2 } from "../day3";

describe("AOC 2015 - Day 3", () => {
  describe("Part 1", () => {
    it("should pass the test", () => {
      expect(part1(content ?? "")).toBe(2572);
    });
  });
  describe("Part 2", () => {
    it("should pass the test", () => {
      expect(part2(content ?? "")).toBe(2631);
    });
  });
});
