/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
    const res = [];
    if (root === null) return res;
    const temp = [root];
    // 保存层数
    let level = 0;
    while (temp.length) {
        level++;
        const arr = [];
        const len = temp.length;
        for (let i = 0; i < len; i++) {
            const node = temp.shift();
            if (level % 2 === 1) {
                // 从左往右
                arr.push(node.val);
            } else {
                // 从右往左
                arr.unshift(node.val);
            }
            if (node.left !== null) temp.push(node.left);
            if (node.right !== null) temp.push(node.right);
        }
        res.push(arr);
    }
    return res;
};
// @lc code=end

