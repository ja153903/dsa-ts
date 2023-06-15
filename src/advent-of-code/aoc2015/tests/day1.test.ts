import { part1, part2, sampleContent, content } from "../day1";

describe("AOC 2015 - Day 1", () => {
  describe("Part 1", () => {
    it("should solve the problem", () => {
      expect(part1(sampleContent ?? "")).toBe(3);
      expect(part1(content ?? "")).toBe(74);
    });
  });

  describe("Part 2", () => {
    it("should solve the problem", () => {
      expect(part2(content ?? "")).toBe(1795);
    });
  });
});
