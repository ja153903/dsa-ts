function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);

  let diff: number | null = null;

  for (let i = 1; i < arr.length; i++) {
    const currentDiff = arr[i] - arr[i - 1];

    if (diff !== null && diff !== currentDiff) {
      return false;
    }

    diff = currentDiff;
  }

  return true;
}

export { canMakeArithmeticProgression };
