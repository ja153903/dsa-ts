function majorityElement(nums: number[]): number {
  const counter = new Map<number, number>();

  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  let majElement = 0;
  let majElementCnt = 0;

  for (const [key, count] of counter.entries()) {
    if (count > majElementCnt) {
      majElementCnt = count;
      majElement = key;
    }
  }

  return majElement;
}

export { majorityElement };
