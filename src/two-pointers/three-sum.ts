function threeSum(nums: number[]): number[][] {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j = i + 1,
        k = nums.length - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k - 1]) {
            k--;
          }

          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return result;
}

export { threeSum };
