import { Trie } from "../tries";

describe("Trie", () => {
  it("should pass a basic test", () => {
    const trie = new Trie();

    expect(trie.contains("jaime")).toBeFalsy();

    trie.add("apple");

    expect(trie.size).toBe(1);

    expect(trie.contains("apple")).toBeTruthy();
    expect(trie.contains("app")).toBeFalsy();
    expect(trie.startsWith("app")).toBeTruthy();

    trie.remove("apple");

    expect(trie.contains("apple")).toBeFalsy();
    expect(trie.size).toBe(0);
  });
});
