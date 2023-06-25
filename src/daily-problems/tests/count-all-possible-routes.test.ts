import { countRoutes } from "../count-all-possible-routes";

describe("Count All Possible Routes", () => {
  it("should pass some test cases", () => {
    let locations = [2, 3, 6, 8, 4],
      start = 1,
      finish = 3,
      fuel = 5;
    expect(countRoutes(locations, start, finish, fuel)).toBe(4);

    (locations = [4, 3, 1]), (start = 1), (finish = 0), (fuel = 6);
    expect(countRoutes(locations, start, finish, fuel)).toBe(5);

    (locations = [5, 2, 1]), (start = 0), (finish = 2), (fuel = 3);
    expect(countRoutes(locations, start, finish, fuel)).toBe(0);
  });
});
