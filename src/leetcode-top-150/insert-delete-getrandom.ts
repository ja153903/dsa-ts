class RandomizedSet {
  private map: Map<number, number>;
  private items: Array<number>;

  constructor() {
    this.map = new Map();
    this.items = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    this.map.set(val, this.items.length);
    this.items.push(val);

    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    // NOTE: We want to swap with the last item in the list of items
    // because this makes it easier to pop the desired item from the list
    // so we don't have to update all the indices involved.
    const last = this.items.length - 1;
    const index = this.map.get(val)!;

    [this.items[index], this.items[last]] = [
      this.items[last],
      this.items[index],
    ];

    const previousLastValue = this.items[index];
    this.map.set(previousLastValue, index);

    this.map.delete(val);
    this.items.pop();

    return true;
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.items.length);

    return this.items[random];
  }
}

export { RandomizedSet };
