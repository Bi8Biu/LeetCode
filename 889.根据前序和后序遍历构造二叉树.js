/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    // 递归终止条件
    if (!preorder.length || !postorder.length) return null;

    // 提取根节点值
    const rootVal = preorder[0];

    // 找出左子树值
    const leftVal = preorder[1];
    // 通过左子树值 找出在后序排列中的索引位置
    const leftIndex = postorder.indexOf(leftVal)
    // 该元素及该元素以左 为 左子树 的后序排列
    const postorderLeft = postorder.slice(0, leftIndex + 1);
    // 该元素以右 到 最后一个元素之间 为 右子树的后序排列
    const postorderRight = postorder.slice(leftIndex + 1, -1);

    // 通过 左子树后序排列数组 确定 左子树前序排列数组
    const preorderLeft = preorder.slice(1, postorderLeft.length + 1);

    // 通过 左子树前序排列数组 确定 右子树前序排列数组
    const preorderRight = preorder.slice(preorderLeft.length + 1);

    // 构建节点
    const root = new TreeNode(rootVal);
    // 节点左右子树为 左右子树 前后序排列数组 所构成的树
    root.left = constructFromPrePost(preorderLeft, postorderLeft);
    root.right = constructFromPrePost(preorderRight, postorderRight);
    // 返回节点
    return root;
};


// @lc code=end

