import { content, part1, part2 } from "../day5";

describe("AOC 2015 - Day 5", () => {
  describe("Part 1", () => {
    it("should run case", () => {
      expect(part1(content ?? "")).toBe(238);
    });
  });

  describe("Part 2", () => {
    it("should run case", () => {
      expect(part2(content ?? "")).toBe(69);
    });
  });
});
