/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
    let globeMax = 0;
    // 直径长度 = 左子树最大深度 + 右子树最大深度
    function maxDeep(root) {
        if (root === null) {
            return 0;
        }
        let leftMax = maxDeep(root.left);
        let rightMax = maxDeep(root.right);
        globeMax = Math.max(globeMax, leftMax + rightMax)
        return Math.max(leftMax, rightMax) + 1;
    }
    maxDeep(root)
    return globeMax;
};



// @lc code=end

const tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
}
console.log(diameterOfBinaryTree(tree))

