import { productExceptSelf } from "../product-of-array-except-self";

describe("Product of Array Except Self", () => {
  it("should pass basic tests", () => {
    expect(productExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    expect(productExceptSelf([12])).toEqual([1]);
    expect(productExceptSelf([])).toEqual([]);
  });
});
