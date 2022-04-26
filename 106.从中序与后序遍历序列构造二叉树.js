/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // 递归退出条件
    if (!inorder.length || !postorder.length) return null;

    // 找出根节点值：后序排列数组 的最后一位即根节点
    const rootVal = postorder.pop();

    // 根据 根节点 找出 左右子树 中序排列数组
    const rootIndex = inorder.indexOf(rootVal);
    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex + 1);

    // 根据 左右子树中序排列数组 得出 左右子树后序排列数组（这俩货长度一样）
    const postorderLeft = postorder.slice(0, inorderLeft.length);
    const postorderRight = postorder.slice(inorderLeft.length);

    // 构建结点
    const root = new TreeNode(rootVal);
    // 左右子树为左右
    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);

    return root;
};



// @lc code=end

