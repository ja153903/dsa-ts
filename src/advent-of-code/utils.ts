import fs from "fs";

export function createFilePathToData(
  year: number,
  day: number,
  isSample = false
): string {
  if (isSample) {
    return `src/advent-of-code/aoc${year}/day${day}.sample.txt`;
  }

  return `src/advent-of-code/aoc${year}/day${day}.txt`;
}

export function readFile(path: string): string | null {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error("Could not read file: ", err);
    return null;
  }
}
