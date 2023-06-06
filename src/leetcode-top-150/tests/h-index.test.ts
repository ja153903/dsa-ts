import { hIndex } from "../h-index";

describe("H-Index", () => {
  it("should pass some tests", () => {
    let citations = [3, 0, 6, 1, 5];
    expect(hIndex(citations)).toBe(3);

    citations = [1, 3, 1];
    expect(hIndex(citations)).toBe(1);

    citations = [0];
    expect(hIndex(citations)).toBe(0);
  });
});
