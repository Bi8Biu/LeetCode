/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    // 结果
    const res = [];
    // 路径
    const path = [];
    // 路径值
    let sum = 0;
    const traverse = node => {
        if (node === null) return false;
        // 存入路径
        path.push(node.val);
        // 更新路径值
        sum += node.val;
        // 叶子节点
        if (node.left === null && node.right === null) {
            // 比对路径值是否等于targetSum
            if (sum === targetSum) {
                // 此处不能直接 push path , 直接 push path为 浅复制
                // 因为后续 path将更改路径进行退栈操作，导致 res 内引用的 path变化
                res.push(path.slice());
            }
        }
        traverse(node.left);
        traverse(node.right);
        // 更改路径，将当前节点退出路径，并更新路径值
        sum -= node.val;
        path.pop();
    }
    traverse(root);
    return res;
};
// @lc code=end

