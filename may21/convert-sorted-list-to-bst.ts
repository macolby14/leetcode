logo
Explore
Problems
Mock
Contest
Discuss
Store
📢 We're hiring, apply today! 📢
1
Description
Solution
Discuss (969)
Submissions
Back
TypeScript Solution. Time O(n)
0
macolby14's avatar
macolby14
3
Last Edit: a few seconds ago

Simulating the inorder traversal of the tree to fill it in used the sorted linked list as we go.

Time Complexity: O(n)
Space Complexity: O(log(n)) - Space used for recursive call stack


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

/* 
- Get length of the LinkedList
- Simulate inorder traversal of a binary tree that would be of that size (with size)
- Fill in the binary tree by keeping a moving pointer to the head node
*/

function sortedListToBST(head: ListNode | null): TreeNode | null {
    //get size
    let curr= head;
    let len=0;
    while(curr){
        len++;
        curr=curr.next;
    }
    
    curr=head;
    
    return recurse(0,len);
    
    
    function recurse(left: number, right: number): TreeNode | null{
        if(left===right){return null;}
        let mid=left+Math.floor((right-left)/2);
        //traverse left
        const leftNode = recurse(left,mid);
        
        const root = new TreeNode(curr.val);
        curr=curr.next;
        
        const rightNode = recurse(mid+1,right);
        root.left=leftNode;
        root.right=rightNode;
        return root;
    }
};

typescript
Comments: 0
BestMost VotesNewest to OldestOldest to Newest
Type comment here... (Markdown is supported)

Preview

Post
Copyright © 2021 LeetCode
Help Center
Jobs
Bug Bounty
Students
Terms
Privacy Policy
United StatesUnited States
Type here...(Markdown is enabled)
​
Saved
TypeScript Solution. Time O(n)

Close

Update
Simulating the inorder traversal of the tree to fill it in used the sorted linked list as we go.
​
Time Complexity: O(n)
Space Complexity: O(log(n)) - Space used for recursive call stack
​
```
​
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
Simulating the inorder traversal of the tree to fill it in used the sorted linked list as we go.

Time Complexity: O(n)
Space Complexity: O(log(n)) - Space used for recursive call stack


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

/* 
- Get length of the LinkedList
- Simulate inorder traversal of a binary tree that would be of that size (with size)
- Fill in the binary tree by keeping a moving pointer to the head node
*/

function sortedListToBST(head: ListNode | null): TreeNode | null {
    //get size
    let curr= head;
    let len=0;
    while(curr){
        len++;
        curr=curr.next;
    }
    
    curr=head;
    
    return recurse(0,len);
    
    
    function recurse(left: number, right: number): TreeNode | null{
        if(left===right){return null;}
        let mid=left+Math.floor((right-left)/2);
        //traverse left
        const leftNode = recurse(left,mid);
        
        const root = new TreeNode(curr.val);
        curr=curr.next;
        
        const rightNode = recurse(mid+1,right);
        root.left=leftNode;
        root.right=rightNode;
        return root;
    }
};

