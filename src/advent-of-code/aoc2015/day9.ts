import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 9));

type Node = { src: string; dst: string; distance: number };

const INPUT_REGEX = /(\w+) to (\w+) = (\d+)/;

function parseData(data: string): Node[] {
  return data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [_match, ...captures] = INPUT_REGEX.exec(line) || [];
      const [src, dst, distance] = captures;

      return { src, dst, distance: Number(distance) };
    });
}

export function part1(data: string): number {
  const locations = parseData(data);

  // TODO: build a graph and find the shortest path to visit every
  // node in a graph (Dijkstra's Algorithm)

  return 0;
}
