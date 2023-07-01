import { ListNode } from "../data-structures-and-algorithms/linked-list";

export class LinkedListHelper {
  static convertLinkedListToArray(node: ListNode | null): Array<number> {
    const result = new Array<number>();

    if (!node) {
      return result;
    }

    while (node) {
      result.push(node.val);
      node = node.next;
    }

    return result;
  }

  static convertArrayToLinkedList(items: Array<number>): ListNode | null {
    if (items.length === 0) {
      return null;
    }

    const head = new ListNode(items[0]);
    let current = head;

    for (let i = 1; i < items.length; i++) {
      current.next = new ListNode(items[i]);
      current = current.next;
    }

    return head;
  }

  /**
   * LinkedListHelper::toString returns a string representation of the entire linked list.
   *
   * For example, suppose that we have the following linked list as an array: \[1, 2, 3, 4\]
   * This function would then return: 1 -> 2 -> 3 -> 4
   */
  static toString(node: ListNode | null): string {
    if (!node) {
      return "";
    }

    return LinkedListHelper.convertLinkedListToArray(node).join(" -> ");
  }
}
