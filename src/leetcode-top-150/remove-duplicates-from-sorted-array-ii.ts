function removeDuplicates(nums: number[]): number {
  const counter = new Map<number, number>();
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    counter.set(nums[i], (counter.get(nums[i]) ?? 0) + 1);

    const current = counter.get(nums[i]) ?? 0;

    // we're going to add this value into the result if it doesn't violate anything
    if (current <= 2) {
      nums[k] = nums[i];
      k++;
    } else {
      counter.set(nums[i], current - 1);
    }
  }

  return k;
}

export { removeDuplicates };
