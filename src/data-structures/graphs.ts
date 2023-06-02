export class UnionFind {
  #parents: number[];
  #ranks: number[];
  #numberOfNodes: number;

  constructor(numberOfNodes: number) {
    this.#numberOfNodes = numberOfNodes;

    this.#parents = Array.from({ length: numberOfNodes }).map(
      (_value, index) => index
    );
    this.#ranks = new Array(numberOfNodes).fill(0);
  }

  union(u: number, v: number) {
    const pu = this.find(u);
    const pv = this.find(v);

    if (pu === pv) {
      return;
    }

    if (this.#ranks[pu] <= this.#ranks[pv]) {
      this.#parents[pu] = pv;
      this.#ranks[pv]++;
    } else {
      this.#parents[pv] = pu;
      this.#ranks[pu]++;
    }
  }

  find(u: number) {
    while (this.#parents[u] !== u) {
      this.#parents[u] = this.#parents[this.#parents[u]];
      u = this.#parents[u];
    }

    return this.#parents[u];
  }

  get numberOfConnectedComponents() {
    const uniqueParents = new Set<number>();

    for (let i = 0; i < this.#numberOfNodes; i++) {
      const parent = this.find(i);
      uniqueParents.add(parent);
    }

    return uniqueParents.size;
  }

  get sizeOfLargestConnectedComponent() {
    const groupByConnectedComponent = new Map<number, number>();
    for (let i = 0; i < this.#numberOfNodes; i++) {
      const parent = this.find(i);
      groupByConnectedComponent.set(
        parent,
        (groupByConnectedComponent.get(parent) ?? 0) + 1
      );
    }

    return Math.max(...groupByConnectedComponent.values());
  }
}
