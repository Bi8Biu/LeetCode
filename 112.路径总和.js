/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // 保存是否存在子树的状态
    let flag = false;
    // 根节点不为空
    if (root !== null) {
        // 根到 遍历到节点 路径值
        let sum = 0;
        // 遍历树
        const traverse = (node) => {
            // 节点为空 或 已经找到子树 不再向后遍历
            if (node === null || flag) return;
            // 加上当前节点值
            sum += node.val;
            // 叶子节点，比对根到叶子值 sum 与 targetSum 是否相等
            if (node.left == null && node.right == null) {
                if (sum == targetSum) flag = true;
            }
            // 遍历左子树
            traverse(node.left);
            // 遍历右子树
            traverse(node.right);

            // 左右子树遍历完毕，寻找新路径，在路径值上删除本结点值
            sum -= node.val;
        }
        traverse(root);
    }
    // 返回状态
    return flag;
};

// @lc code=end

