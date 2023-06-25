import { part1, part2, content, sampleContent } from "../day8";

describe("AOC 2015 - Day 8", () => {
  describe("Part 1", () => {
    it("should pass", () => {
      expect(part1(sampleContent ?? "")).toBe(12);
      expect(part1(content ?? "")).toBe(1371);
    });
  });

  describe("Part 2", () => {
    it("should pass", () => {
      expect(part2(sampleContent ?? "")).toBe(19);
      expect(part2(content ?? "")).toBe(2117);
    });
  });
});
