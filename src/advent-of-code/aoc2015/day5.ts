import { readFile } from "../utils";

const PATH_TO_FILE = "src/advent-of-code/aoc2015/data/day5.txt";

export const content = readFile(PATH_TO_FILE);

function parseData(data: string) {
  return data.split("\n").filter(Boolean);
}

const VOWELS = ["a", "e", "i", "o", "u"];
const FORBIDDEN_PAIRS = ["ab", "cd", "pq", "xy"];

function hasAtLeastNVowels(word: string, n: number = 3): boolean {
  let count = 0;

  for (const ch of word) {
    if (VOWELS.includes(ch)) {
      count++;
    }
  }

  return count >= n;
}

function hasRepeatingLetters(word: string): boolean {
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      return true;
    }
  }

  return false;
}

function hasForbiddenPair(word: string): boolean {
  for (let i = 1; i < word.length; i++) {
    if (FORBIDDEN_PAIRS.includes(`${word[i - 1]}${word[i]}`)) {
      return true;
    }
  }

  return false;
}

function isNiceWord(word: string): boolean {
  if (hasForbiddenPair(word)) {
    return false;
  }

  return hasAtLeastNVowels(word) && hasRepeatingLetters(word);
}

export function part1(data: string) {
  return parseData(data)
    .map((word) => isNiceWord(word))
    .reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
}

function repeatsBetween(word: string): boolean {
  for (let i = 1; i < word.length - 1; i++) {
    if (word[i - 1] === word[i + 1]) {
      return true;
    }
  }

  return false;
}

function lookAhead(word: string): boolean {
  for (let i = 1; i < word.length; i++) {
    const substr = `${word[i - 1]}${word[i]}`;
    if (word.indexOf(substr, i + 1) >= 0) {
      return true;
    }
  }

  return false;
}

function isNiceWord2(word: string): boolean {
  return repeatsBetween(word) && lookAhead(word);
}

export function part2(data: string) {
  return parseData(data)
    .map((word) => isNiceWord2(word))
    .reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
}
