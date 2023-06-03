import { numOfMinutes } from "../time-needed-to-inform-employees";

describe("Time Needed to Inform Employees", () => {
  it("should pass basic cases", () => {
    let n = 1,
      headID = 0,
      manager = [-1],
      informTime = [0];
    expect(numOfMinutes(n, headID, manager, informTime)).toBe(0);

    (n = 6),
      (headID = 2),
      (manager = [2, 2, -1, 2, 2, 2]),
      (informTime = [0, 0, 1, 0, 0, 0]);
    expect(numOfMinutes(n, headID, manager, informTime)).toBe(1);
  });
});
