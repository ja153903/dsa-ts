import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 8));

function parseData(data: string): string[] {
  return data.split("\n");
}

export function part1(data: string): number {
  const strings = parseData(data);

  return strings.reduce((acc, s) => {
    return acc;
  }, 0);
}
