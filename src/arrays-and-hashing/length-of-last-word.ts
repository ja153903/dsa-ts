function lengthOfLastWord(s: string): number {
  return (
    s
      .split(" ")
      .filter((word) => word.length > 0)
      .at(-1)?.length ?? 0
  );
}

export { lengthOfLastWord };
