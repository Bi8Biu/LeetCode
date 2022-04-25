/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    /**
     *  4. 空节点，结束递归
     */
    if (preorder.length === 0) return null;

    /**
     * 1. 找出根节点
     *      前序遍历数组 第一位即是根节点
     * */
    const val = preorder[0];
    const root = new TreeNode(val);

    /**
     *  5. 叶子节点，结束递归
     */
    if (preorder.length === 1) return root;

    /**
     * 2. 找出左子树 与 右子树
     *      在中序遍历数组中，根节点左侧是左子树，右侧是右子树
     */
    // 根节点坐标
    const rootIndex = inorder.indexOf(val);

    // 左右子树的中序遍历数组
    const left = {
        inorder: inorder.slice(0, rootIndex)
    };
    const right = {
        inorder: inorder.slice(rootIndex + 1)
    }

    // 由于 前序遍历数组 与 中序遍历数组长度相等
    // 则可以通过 父树的前序遍历数组 与 子树的中序遍历数组 得出 子树的前序遍历数组
    left.preorder = preorder.slice(1, 1 + left.inorder.length);
    right.preorder = preorder.slice(1 + left.inorder.length);

    /**
     * 3. 通过左右子树的 前序遍历数组、 中序遍历数组 递归 生成子树
     */
    root.left = buildTree(left.preorder, left.inorder);
    root.right = buildTree(right.preorder, right.inorder);

    return root;

};
// @lc code=end

