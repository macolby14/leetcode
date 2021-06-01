/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 
 Take the left child -> Process it and append to root
 Take the right child -> Process it and append to left child
 Appending is setting left child to null and setting right child to the result
 If a leaf node -> return the leaf node (left and right child null)
 Return the end of the LinkedList
 If a node with left child -> return the node with the child shifted to right. 
 If a node with right child -> return the node
 If node with left and right child -> null the left child. Process the right child. Append to the right child the left child. return the right child
 
 */

function flatten(root: TreeNode | null): void {
  helper(root);
}

//return the last node in the list
function helper(node: TreeNode | null): TreeNode | null {
  if (!node) {
    return null;
  }
  if (!node.left && !node.right) {
    return node;
  } //this node is the end of the linked list
  const leftTail = helper(node.left);
  const leftHead = node.left;
  const rightTail = helper(node.right);
  const rightHead = node.right;

  node.left = null;

  if (leftHead) {
    node.right = leftHead;
    leftTail.right = rightHead;
  }

  return rightTail ? rightTail : leftTail;
}
