function nextGreatestLetter(letters: string[], target: string): string {
  let result = "";

  for (let i = 0; i < letters.length; i++) {
    // check if current character is greater than target
    if (letters[i].localeCompare(target) > 0) {
      if (result.length === 0 || letters[i].localeCompare(result) < 0) {
        result = letters[i];
      }
    }
  }

  return result || letters[0];
}

export { nextGreatestLetter };
