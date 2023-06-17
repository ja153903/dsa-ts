import md5 from "md5";

// NOTE: There is definitely a better way of solving this question
// but for now, I'll defer to this brute force solution.
// An idea I can think of is using binary search, but
// the condition to limit the bounds is escaping me.

const content = "iwrupvqb";

export function part1() {
  let value = 300000;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const hash = md5(`${content}${value}`);
    if (hash.substring(0, 5) === "00000") {
      return value;
    }
    value++;
  }
}

export function part2() {
  let value = part1();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const hash = md5(`${content}${value}`);
    if (hash.substring(0, 6) === "000000") {
      return value;
    }
    value++;
  }
}
