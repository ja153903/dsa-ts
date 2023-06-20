function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((w) => w.length > 0)
    .reverse()
    .join(" ");
}

export { reverseWords };
