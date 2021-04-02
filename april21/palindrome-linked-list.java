/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        /*
         * Need a pointer at beginning and end Recursively get to end - Front pointer is
         * first node - End pointer is found by recursively walking through to find the
         * end - front = first node - end = last node -> Could reverse the linked list,
         * but will modify the previous - Can do it in O(n) space and O(n) time with a
         * Stack
         */

        ListNode node = head;
        Stack<ListNode> st = new Stack<>();
        while (node != null) {
            st.push(node);
            node = node.next;
        }

        ListNode front = head;
        while (st.size() > 0) {
            ListNode last = st.pop();
            if (last.val != front.val) {
                return false;
            }
            if (last == front || front.next == last) {
                return true;
            }
            front = front.next;
        }

        return true;
    }
}