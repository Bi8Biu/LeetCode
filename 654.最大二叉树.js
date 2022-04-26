/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    // 递归退出条件
    if (nums.length === 0) return null;

    // 在数组中找出最大值
    const max = Math.max(...nums);
    // 找出最大值的索引
    const maxIndex = nums.indexOf(max);
    // 根据最大值索引分割出 左子树数组 和 右子树数组
    const leftArr = nums.slice(0, maxIndex);
    const rightArr = nums.slice(maxIndex + 1);

    // 构建节点
    // 当前节点值为当前数组中最大值
    const root = new TreeNode(max)
    // 当前节点的左右子树 为 左右数组构建的结点
    root.left = constructMaximumBinaryTree(leftArr);
    root.right = constructMaximumBinaryTree(rightArr);

    // 返回创建的结点
    return root;
};
// @lc code=end

