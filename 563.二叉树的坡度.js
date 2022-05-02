/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
    // 结果：坡度和
    let res = 0;
    // 遍历树
    const traverse = node => {
        // 如果结点为空 返回0
        if (node === null) return 0;
        // 遍历左右子树
        const leftVal = traverse(node.left);
        const rightVal = traverse(node.right);
        // 计算坡度
        const slope = Math.abs(leftVal - rightVal);
        // 将坡度加到到结果中
        res += slope;
        // 返回自身及左右节点值之和
        return node.val + leftVal + rightVal;
    };
    traverse(root)
    // 返回结果
    return res;
};
// @lc code=end

