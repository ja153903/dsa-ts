function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let result = 0;

  for (let left = 0; left < nums.length; left++) {
    if (nums[left] % 2 !== 0) {
      continue;
    }

    let right = left;

    while (right < nums.length) {
      let count = 0;

      for (let start = left; start <= right; start++) {
        if (start < right && nums[start] % 2 === nums[start + 1] % 2) {
          break;
        }

        if (nums[start] > threshold) {
          break;
        }

        count++;
      }

      result = Math.max(result, count);
      right++;
    }
  }

  return result;
}

export { longestAlternatingSubarray };
