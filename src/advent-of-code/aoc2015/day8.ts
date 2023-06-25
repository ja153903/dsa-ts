import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 8));

function parseData(data: string): string[] {
  return data.split("\n");
}

export function part1(data: string): number {
  const strings = parseData(data);

  return strings.reduce((acc, s) => {
    let unescapedChars = 2;

    for (const char of s) {
      if (["'", "\"", "\\"].includes(char)) {
        unescapedChars += 2;
      } else {
        unescapedChars++;
      }
    }

    acc += unescapedChars - s.length;
    return acc;
  }, 0);
}
