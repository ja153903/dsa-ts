import { content, part1, part2 } from "../day7";

describe("AOC 2015 - Day 7", () => {
  describe("Part 1", () => {
    it("should run case", () => {
      expect(part1(content ?? "")).toBe(3176);
    });
  });

  describe("Part 2", () => {
    it("should run case", () => {
      expect(part2(content ?? "")).toBe(14710);
    });
  });
});
