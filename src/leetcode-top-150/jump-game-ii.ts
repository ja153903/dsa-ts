function jump(nums: number[]): number {
  const dp = new Array<number>(nums.length).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.at(-1) ?? -1;
}

export { jump };
