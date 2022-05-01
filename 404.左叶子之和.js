/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let res = 0;
    const traverse = node => {
        if (node == null) return;
        if (node.left && node.left.left === null && node.left.right === null) res += node.left.val;
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return res;
};

// @lc code=end

