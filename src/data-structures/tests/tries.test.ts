import { Trie } from "../tries";

describe("Trie", () => {
  it("should pass a basic test", () => {
    const trie = new Trie();

    expect(trie.containsWord("jaime")).toBeFalsy();

    trie.addWord("apple");

    expect(trie.containsWord("apple")).toBeTruthy();
    expect(trie.containsWord("app")).toBeFalsy();
  });
});
