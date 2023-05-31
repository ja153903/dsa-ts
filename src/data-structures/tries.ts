export class Trie {
  #isWord: boolean;
  #children: Map<string, Trie>;

  constructor() {
    this.#isWord = false;
    this.#children = new Map();
  }

  addWord(word: string) {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.#children.has(ch)) {
        current.#children.set(ch, new Trie());
      }

      current = current.#children.get(ch)!;
    }

    current.#isWord = true;
  }

  containsWord(word: string): boolean {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.#children.has(ch)) {
        current.#children.set(ch, new Trie());
      }

      current = current.#children.get(ch)!;
    }

    return current.#isWord;
  }
}
