function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;

  let result = 0;
  let totalTank = 0;
  let localTank = 0;

  for (let i = 0; i < n; i++) {
    const gasToMoveOn = gas[i] - cost[i];

    totalTank += gasToMoveOn;
    localTank += gasToMoveOn;

    // if at some point the local tank goes negative, this means that we need to update
    // our start pointer
    if (localTank < 0) {
      result = i + 1;
      localTank = 0;
    }
  }

  // if the return is negative, then we know its not possible
  // otherwise we return whatever our result is
  return totalTank < 0 ? -1 : result;
}

export { canCompleteCircuit };
