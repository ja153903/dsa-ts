function removeDuplicates(nums: number[]): number {
  const uniqueElements = new Set();
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (uniqueElements.has(nums[i])) {
      continue;
    }

    uniqueElements.add(nums[i]);
    nums[k] = nums[i];
    k++;
  }

  return uniqueElements.size;
}

export { removeDuplicates };
