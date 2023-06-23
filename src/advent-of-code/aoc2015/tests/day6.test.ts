import { content, part1, part2 } from "../day6";

describe("AOC 2015 - Day 6", () => {
  describe("Part 1", () => {
    it("should run case", () => {
      expect(part1(content ?? "")).toBe(400410);
    });
  });

  describe("Part 2", () => {
    it("should run case", () => {
      expect(part2(content ?? "")).toBe(15343601);
    });
  });
});
