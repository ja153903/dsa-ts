function replaceElements(arr: number[]): number[] {
  const result = new Array<number>(arr.length).fill(-1);
  let maxSoFar = arr.at(-1) ?? Number.NEGATIVE_INFINITY;

  for (let i = arr.length - 2; i >= 0; i--) {
    maxSoFar = Math.max(maxSoFar, arr[i + 1]);
    result[i] = maxSoFar;
  }

  return result;
}

export { replaceElements };
