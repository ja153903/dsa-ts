/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const rotated = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}

// NOTE: There is another way to solve this problem
// but that way involves reversing the following:
// Reverse n - k elements
// Reverse last k elements
// Reverse the entire array

export { rotate };
