/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 6));

type Coord = { x: number; y: number };
type Instruction = {
  cmd: string;
  start: Coord;
  end: Coord;
};

function parseData(data: string): Instruction[] {
  return data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const instruction = {
        cmd: "",
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      const parts = line.split(" ");
      const preCmd = parts.shift()!;

      if (preCmd === "toggle") {
        instruction.cmd = preCmd;
      } else {
        const followUpCmd = parts.shift()!;
        instruction.cmd = `${preCmd} ${followUpCmd}`;
      }

      const startCoord = parts.shift()!;
      const [startX, startY] = startCoord
        .split(",")
        .map((num) => parseInt(num));
      instruction.start.x = startX;
      instruction.start.y = startY;

      // Through
      parts.shift();

      const endCoord = parts.shift()!;
      const [endX, endY] = endCoord.split(",").map((num) => parseInt(num));
      instruction.end.x = endX;
      instruction.end.y = endY;

      return instruction;
    });
}

export function part1(data: string): number {
  const instructions = parseData(data);
  const matrix: number[][] = Array.from(Array(1000), () =>
    new Array(1000).fill(0)
  );

  instructions.forEach(({ cmd, start, end }) => {
    for (let row = start.x; row <= end.x; row++) {
      for (let col = start.y; col <= end.y; col++) {
        switch (cmd) {
          case "turn on":
            matrix[row][col] = 1;
            break;
          case "turn off":
            matrix[row][col] = 0;
            break;
          default:
            matrix[row][col] ^= 1;
            break;
        }
      }
    }
  });

  let sum = 0;

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

export function part2(data: string) {
  const instructions = parseData(data);
  const matrix: number[][] = Array.from(Array(1000), () =>
    new Array(1000).fill(0)
  );

  instructions.forEach(({ cmd, start, end }) => {
    for (let row = start.x; row <= end.x; row++) {
      for (let col = start.y; col <= end.y; col++) {
        switch (cmd) {
          case "turn on":
            matrix[row][col] += 1;
            break;
          case "turn off":
            matrix[row][col] = Math.max(0, matrix[row][col] - 1);
            break;
          default:
            matrix[row][col] += 2;
            break;
        }
      }
    }
  });

  let sum = 0;

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}
