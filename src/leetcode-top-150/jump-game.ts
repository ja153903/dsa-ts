function canJump(nums: number[]): boolean {
  // we should probably go through the array
  // keeping track of the  maximum index we can jump to
  let maxIndexSoFar = 0;

  // NOTE: We also want to make sure that `maxIndexSoFar` will
  // at least be greater than or equal to the current index `i`
  // otherwise this means that we can't even reach that current index
  for (let i = 0; i < nums.length && i <= maxIndexSoFar; i++) {
    maxIndexSoFar = Math.max(maxIndexSoFar, nums[i] + i);
  }

  return maxIndexSoFar >= nums.length - 1;
}

export { canJump };
