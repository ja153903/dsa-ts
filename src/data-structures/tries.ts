export class Trie {
  #isWord: boolean;
  #children: Map<string, Trie>;
  #count: number;

  constructor() {
    this.#isWord = false;
    this.#children = new Map();
    this.#count = 0;
  }

  add(word: string) {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.#children.has(ch)) {
        current.#children.set(ch, new Trie());
      }

      current = current.#children.get(ch)!;
    }

    current.#isWord = true;

    this.#count++;
  }

  contains(word: string): boolean {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.#children.has(ch)) {
        return false;
      }

      current = current.#children.get(ch)!;
    }

    return current.#isWord;
  }

  /**
   * Note that this remove function does not remove the
   * trie nodes. It only makes sure that we cannot determine
   * whether something is a word.
   */
  remove(word: string): boolean {
    if (!this.contains(word)) {
      return false;
    }

    let current: Trie = this;

    for (const ch of word) {
      current = current.#children.get(ch)!;
    }

    current.#isWord = false;

    this.#count--;

    return true;
  }

  startsWith(word: string): boolean {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.#children.has(ch)) {
        return false;
      }

      current = current.#children.get(ch)!;
    }

    // This only proves that there exists a path to a potential word
    // however, that word may not actually be a word in the Trie anymore
    // we may want to adjust this implementation to account for how
    // we have implemented the remove function

    return true;
  }

  /**
   * This property returns the number of words that are stored within the Trie
   */
  get size(): number {
    return this.#count;
  }
}
