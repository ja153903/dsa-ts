import { isPalindrome } from "../valid-palindrome";

describe("Valid Palindrome", () => {
  it("should pass some basic cases", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
  });
});
