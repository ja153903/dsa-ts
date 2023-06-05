function checkStraightLine(coordinates: number[][]): boolean {
  coordinates.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let previousSlope: number | null = null;

  for (let i = 1; i < coordinates.length; i++) {
    // NOTE: JavaScript evaluates this to be NaN instead of throwing an error
    const slope =
      (coordinates[i][1] - coordinates[i - 1][1]) /
      (coordinates[i][0] - coordinates[i - 1][0]);

    if (previousSlope !== null && slope !== previousSlope) {
      return false;
    }

    previousSlope = slope;
  }

  return true;
}

export { checkStraightLine };
