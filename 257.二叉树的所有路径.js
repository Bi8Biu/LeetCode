/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    // 结果
    const res = [];
    // 存放路径
    let path = [];
    const traverse = node => {
        if (node === null) return;
        // 将自己存入路径
        path.push(node.val);
        // 是叶子节点
        if (node.right === null && node.left === null) {
            // 将路径成员使用 '->' 连接为字符串，放入结果数组中
            res.push(path.join('->'))
        }
        // 遍历左右子树
        traverse(node.left);
        traverse(node.right);
        // 左右子树遍历完毕，寻找新路径，将自身退出路径数组
        path.pop()
    }
    traverse(root);
    return res;
};

// @lc code=end

