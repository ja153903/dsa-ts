function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const current = numbers[left] + numbers[right];
    if (current === target) {
      return [left + 1, right + 1];
    } else if (current < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

export { twoSum };
