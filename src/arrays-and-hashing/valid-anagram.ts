function isAnagram(s: string, t: string): boolean {
  const sortString = (str: string) => str.split("").sort().join("");

  if (s === t) {
    return true;
  }

  if (s.length !== t.length) {
    return false;
  }

  return sortString(s) === sortString(t);
}

export { isAnagram };
