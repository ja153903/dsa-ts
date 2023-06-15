import { readFile } from "../utils";

const PATH_TO_FILE = "src/advent-of-code/aoc2015/data/day2.txt";

export const content = readFile(PATH_TO_FILE);

function calculateSurfaceArea(l: number, w: number, h: number): number {
  return 2 * l * w + 2 * l * h + 2 * w * h;
}

function findAreaOfTwoSmallestSides(l: number, w: number, h: number): number {
  if (l >= w && l >= h) {
    return w * h;
  }

  if (w >= h && w >= l) {
    return h * l;
  }

  return w * l;
}

function finddPerimeterOfTwoSmallestSides(
  l: number,
  w: number,
  h: number
): number {
  if (l >= w && l >= h) {
    return 2 * w + 2 * h;
  }

  if (w >= h && w >= l) {
    return 2 * h + 2 * l;
  }

  return 2 * w + 2 * l;
}

function findCubicArea(l: number, w: number, h: number): number {
  return l * w * h;
}

function parseInputData(data: string): number[][] {
  return data
    .split("\n")
    .map((line) => line.split("x").map((ch) => parseInt(ch)))
    .filter((row) => !row.includes(NaN));
}

export function part1(data: string) {
  return parseInputData(data)
    .map(
      ([l, w, h]) =>
        calculateSurfaceArea(l, w, h) + findAreaOfTwoSmallestSides(l, w, h)
    )
    .reduce((a, b) => a + b);
}

export function part2(data: string) {
  return parseInputData(data)
    .map(
      ([l, w, h]) =>
        findCubicArea(l, w, h) + finddPerimeterOfTwoSmallestSides(l, w, h)
    )
    .reduce((a, b) => a + b);
}
