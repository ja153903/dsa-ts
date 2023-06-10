// https://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html
function maxValue(n: number, index: number, maxSum: number): number {
  maxSum -= n;

  let left = 0,
    right = maxSum;

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (arithSum(n, index, mid) <= maxSum) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left + 1;
}

function arithSum(n: number, index: number, mid: number): number {
  let b = Math.max(mid - index, 0);
  let result = Math.floor(((mid + b) * (mid - b + 1)) / 2);
  b = Math.max(mid - (n - 1 - index), 0);
  result += Math.floor(((mid + b) * (mid - b + 1)) / 2);

  return result - mid;
}

export { maxValue };
