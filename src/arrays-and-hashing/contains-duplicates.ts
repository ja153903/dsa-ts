// https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const item of nums) {
    if (seen.has(item)) {
      return true;
    }

    seen.add(item);
  }

  return false;
}

export { containsDuplicate };
