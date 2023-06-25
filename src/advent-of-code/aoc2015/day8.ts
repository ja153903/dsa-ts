import { readFile, createFilePathToData } from "../utils";

export const sampleContent = readFile(createFilePathToData(2015, 8, true));
export const content = readFile(createFilePathToData(2015, 8));

function parseData(data: string): string[] {
  const lines = data.split("\n");
  return lines.slice(0, -1);
}

const ESCAPED_CHARACTERS = ["%5C", "%22"];

export function part1(data: string): number {
  const strings = parseData(data);

  return strings.reduce((acc, s) => {
    acc += s.length - eval(s).length;
    return acc;
  }, 0);
}

export function part2(data: string): number {
  const strings = parseData(data);

  return strings.reduce((acc, s) => {
    let strLiteralLength = 2;

    let i = 0;

    const escaped = escape(s);

    while (i < escaped.length) {
      if (escaped[i] === "%") {
        const substr = escaped.substring(i, i + 3);
        if (ESCAPED_CHARACTERS.includes(substr)) {
          strLiteralLength += 2;
        }

        i += 3;
      } else {
        strLiteralLength += 1;
        i += 1;
      }
    }

    const inMemoryLength = s.length;

    acc += strLiteralLength - inMemoryLength;

    return acc;
  }, 0);
}
