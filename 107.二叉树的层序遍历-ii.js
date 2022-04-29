/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const res = [];
    if (root === null) return res;

    const temp = [root];
    while (temp.length) {
        const arr = [];
        const len = temp.length;
        for (let i = 0; i < len; i++) {
            const node = temp.shift();
            arr.push(node.val)
            if (node.left !== null) temp.push(node.left)
            if (node.right !== null) temp.push(node.right)
        }
        res.unshift(arr);
    }
    return res;
};
// @lc code=end

