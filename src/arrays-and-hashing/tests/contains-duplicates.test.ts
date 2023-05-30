import { containsDuplicate } from "../contains-duplicates";

describe("Contains Duplicates", () => {
  it("should pass a basic test case", () => {
    expect(containsDuplicate([1, 1, 1])).toBeTruthy();
  });
});
