import { maxProfit } from "../best-time-to-buy-and-sell-stock-ii";

describe("Best Time to Buy and Sell Stock II", () => {
  it("should pass basic tests", () => {
    let prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(7);

    prices = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toBe(4);

    prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});
