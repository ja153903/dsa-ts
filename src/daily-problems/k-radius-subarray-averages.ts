function getAverages(nums: number[], k: number): number[] {
  const prefixSum = new Array<number>(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSum[i] = nums[i];
    } else {
      prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
  }

  const result = new Array<number>(nums.length).fill(-1);

  for (let i = k; i < nums.length - k; i++) {
    const sum = prefixSum[i + k] - prefixSum[i - k] + nums[i - k];
    // NOTE: Derived from (i + k) - (i - k) + 1
    const length = 2 * k + 1;

    result[i] = Math.floor(sum / length);
  }

  return result;
}

export { getAverages };
