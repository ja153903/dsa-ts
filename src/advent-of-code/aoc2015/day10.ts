export const content = "1113222113";

export function solve(data: string, runs: number): number {
  let result = data;

  for (let rep = 0; rep < runs; rep++) {
    let current: string[] = [];
    let counts = new Array<number>(10).fill(0);

    for (let i = 0; i < result.length; i++) {
      // check if previous is not the same
      if (i > 0 && result[i] !== result[i - 1]) {
        // add the previous item with its count
        current.push(counts[Number(result[i - 1])].toString());
        current.push(result[i - 1]);

        counts[Number(result[i - 1])] = 0;
      }

      counts[Number(result[i])]++;
    }

    for (let i = 0; i < 10; i++) {
      if (counts[i] > 0) {
        current.push(counts[i].toString());
        current.push(i.toString());
      }
    }

    result = current.join("");
  }

  return result.length;
}
