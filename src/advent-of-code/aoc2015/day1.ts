import { readFile } from "../utils";

const PATH_TO_SAMPLE_FILE = "src/advent-of-code/aoc2015/data/day1.sample.txt";
const PATH_TO_FILE = "src/advent-of-code/aoc2015/data/day1.txt";

export const content = readFile(PATH_TO_FILE);
export const sampleContent = readFile(PATH_TO_SAMPLE_FILE);

export function part1(data: string) {
  return data?.split("")?.reduce((acc, char) => {
    if (char === "(") {
      return acc + 1;
    } else if (char === ")") {
      return acc - 1;
    }

    return acc;
  }, 0);
}

export function part2(data: string) {
  let floor = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      floor++;
    } else if (data[i] === ")") {
      floor--;
    }

    if (floor < 0) {
      return i + 1;
    }
  }

  return -1;
}
