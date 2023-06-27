import { part1, part2, content, sampleContent } from "../day9";

describe("AOC 2015 - Day 9", () => {
  describe("Part 1", () => {
    it("should pass", () => {
      expect(part1(sampleContent ?? "")).toBe(605);
      expect(part1(content ?? "")).toBe(251);
    });
  });

  describe("Part 2", () => {
    it("should pass", () => {
      expect(part2(content ?? "")).toBe(898);
    });
  });
});
