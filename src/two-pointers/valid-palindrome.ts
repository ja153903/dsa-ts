function isPalindrome(s: string): boolean {
  const words = s
    .split("")
    .filter((ch) => ch.match(/[a-zA-Z0-9]/g))
    .map((ch) => ch.toLowerCase());

  let left = 0,
    right = words.length - 1;

  while (left < right) {
    if (words[left] !== words[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

export { isPalindrome };
