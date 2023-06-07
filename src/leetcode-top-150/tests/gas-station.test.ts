import { canCompleteCircuit } from "../gas-station";

describe("Gas Station", () => {
  it("should pass basic tests", () => {
    let gas = [1, 2, 3, 4, 5];
    let cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toBe(3);

    (gas = [2, 3, 4]), (cost = [3, 4, 3]);
    expect(canCompleteCircuit(gas, cost)).toBe(-1);

    (gas = [5, 1, 2, 3, 4]), (cost = [4, 4, 1, 5, 1]);
    expect(canCompleteCircuit(gas, cost)).toBe(4);

    (gas = [2, 3, 1]), (cost = [3, 1, 2]);
    expect(canCompleteCircuit(gas, cost)).toBe(1);

    (gas = [6, 1, 4, 3, 5]), (cost = [3, 8, 2, 4, 2]);
    expect(canCompleteCircuit(gas, cost)).toBe(2);
  });
});
