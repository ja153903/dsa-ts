import { createFilePathToData, readFile } from "../utils";

const IS_SAMPLE = true;

export const content = readFile(createFilePathToData(2015, 1));
export const sampleContent = readFile(createFilePathToData(2015, 1, IS_SAMPLE));

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
