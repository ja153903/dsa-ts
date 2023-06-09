import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 3));

export function part1(data: string): number {
  const parsedData = data.split("\n")[0];
  const visited = new Set<string>();
  let x = 0,
    y = 0;

  visited.add(`${x},${y}`);

  parsedData.split("").forEach((ch) => {
    switch (ch) {
    case "^":
      y += 1;
      break;
    case "v":
      y -= 1;
      break;
    case ">":
      x += 1;
      break;
    case "<":
      x -= 1;
      break;
    }

    visited.add(`${x},${y}`);
  });

  return visited.size;
}

export function part2(data: string): number {
  const parsedData = data.split("\n")[0];
  const visited = new Set<string>();
  let sx = 0,
    sy = 0,
    rx = 0,
    ry = 0;

  visited.add(`${rx},${ry}`);

  parsedData.split("").forEach((ch, index) => {
    switch (ch) {
    case "^": {
      if (index % 2 === 0) {
        sy += 1;
      } else {
        ry += 1;
      }
      break;
    }
    case "v": {
      if (index % 2 === 0) {
        sy -= 1;
      } else {
        ry -= 1;
      }
      break;
    }
    case ">": {
      if (index % 2 === 0) {
        sx += 1;
      } else {
        rx += 1;
      }
      break;
    }
    case "<": {
      if (index % 2 === 0) {
        sx -= 1;
      } else {
        rx -= 1;
      }
      break;
    }
    }

    if (index % 2 === 0) {
      visited.add(`${sx},${sy}`);
    } else {
      visited.add(`${rx},${ry}`);
    }
  });

  return visited.size;
}
