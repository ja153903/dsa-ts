/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const result = new Array(m + n).fill(0);

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k] = nums1[i];
      i++;
    } else {
      result[k] = nums2[j];
      j++;
    }

    k++;
  }

  while (i < m) {
    result[k] = nums1[i];
    k++;
    i++;
  }

  while (j < n) {
    result[k] = nums2[j];
    k++;
    j++;
  }

  for (let i = 0; i < k; i++) {
    nums1[i] = result[i];
  }
}

export { merge };
