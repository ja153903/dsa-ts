import { part1, part2, content } from "../day2";

describe("AOC 2015 - Day 2", () => {
  describe("Part 1", () => {
    it("should solve the problem", () => {
      expect(part1(content ?? "")).toBe(1606483);
    });
  });

  describe("Part 2", () => {
    it("should solve the problem", () => {
      expect(part2(content ?? "")).toBe(3842356);
    });
  });
});
