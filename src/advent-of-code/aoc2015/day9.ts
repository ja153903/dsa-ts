import { MinPriorityQueue } from "@datastructures-js/priority-queue";

import { readFile, createFilePathToData } from "../utils";

export const content = readFile(createFilePathToData(2015, 9));
export const sampleContent = readFile(createFilePathToData(2015, 9, true));

type Node = { src: string; dst: string; distance: number };
type Child = { distance: number; dst: string };

const INPUT_REGEX = /(\w+) to (\w+) = (\d+)/;

function parseData(data: string): Node[] {
  return data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [, ...captures] = INPUT_REGEX.exec(line) || [];
      const [src, dst, distance] = captures;

      return { src, dst, distance: Number(distance) };
    });
}

// NOTE: For some reason, this might not be working
export function dijkstras(graph: Map<string, Child[]>, source: string): number {
  const dist = new Map<string, number>();
  const Q = new MinPriorityQueue<{ weight: number; vertex: string }>(
    (node) => node.weight
  );

  for (const vertex of graph.keys()) {
    dist.set(vertex, Infinity);
  }

  dist.set(source, 0);

  Q.enqueue({ vertex: source, weight: 0 });

  while (!Q.isEmpty()) {
    const { vertex } = Q.dequeue();
    const distU = dist.get(vertex) ?? Infinity;

    for (const { dst, distance } of graph.get(vertex) ?? []) {
      const distV = dist.get(dst) ?? Infinity;
      const updatedWeight = distU + distance;

      if (distV > updatedWeight) {
        dist.set(dst, updatedWeight);
        Q.enqueue({ vertex: dst, weight: updatedWeight });
      }
    }
  }

  return [...dist.values()].reduce((acc, value) => acc + value, 0);
}

function dfs(
  graph: Map<string, Child[]>,
  source: string,
  visited: Set<string>,
  currentPath: number,
  paths: number[],
  isMax: boolean = false
) {
  if (visited.size === graph.size) {
    const cmp = isMax ? Math.max : Math.min;

    paths[0] = cmp(paths[0], currentPath);
    return;
  }

  for (const { distance, dst } of graph.get(source) ?? []) {
    if (visited.has(dst)) {
      continue;
    }

    visited.add(dst);
    currentPath += distance;

    dfs(graph, dst, visited, currentPath, paths, isMax);

    visited.delete(dst);
    currentPath -= distance;
  }
}

export function part1(data: string): number {
  const locations = parseData(data);
  const graph = new Map<string, Child[]>();

  for (const { src, dst, distance } of locations) {
    if (!graph.has(src)) {
      graph.set(src, [] as Child[]);
    }

    if (!graph.has(dst)) {
      graph.set(dst, [] as Child[]);
    }

    graph.get(src)?.push({ dst, distance });
    graph.get(dst)?.push({ dst: src, distance });
  }

  let result = Infinity;

  for (const vertex of graph.keys()) {
    let currentPath = 0;
    let paths = [Infinity];
    const visited = new Set<string>();

    visited.add(vertex);

    dfs(graph, vertex, visited, currentPath, paths);

    result = Math.min(result, paths[0]);
  }

  return result;
}

export function part2(data: string): number {
  const locations = parseData(data);
  const graph = new Map<string, Child[]>();

  for (const { src, dst, distance } of locations) {
    if (!graph.has(src)) {
      graph.set(src, [] as Child[]);
    }

    if (!graph.has(dst)) {
      graph.set(dst, [] as Child[]);
    }

    graph.get(src)?.push({ dst, distance });
    graph.get(dst)?.push({ dst: src, distance });
  }

  let result = Number.NEGATIVE_INFINITY;

  for (const vertex of graph.keys()) {
    let currentPath = 0;
    let paths = [Number.NEGATIVE_INFINITY];
    const visited = new Set<string>();

    visited.add(vertex);

    dfs(graph, vertex, visited, currentPath, paths, true);

    result = Math.max(result, paths[0]);
  }

  return result;
}
