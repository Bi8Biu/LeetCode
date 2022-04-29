/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    // 根节点为空，返回空数组
    if (root === null) return [];
    // 结果数组
    const res = [];
    // 中转工具数组，存放每层的节点
    const temp = [root];
    // 若数组内有成员，则循环（每次循环为一层）
    while (temp.length) {
        // 存放本层节点值
        const valArr = [];
        // 保存本层成员个数
        // 由于在遍历本层成员时，会在中转数组中添加下层成员，会导致无法退出本层遍历
        const len = temp.length
        // 遍历本层成员
        for (let i = 0; i < len; i++) {
            // 将该节点从本层节点数组中删除，且将值放入 arr 中
            const node = temp.shift();
            valArr.push(node.val);
            // 添加下一层成员
            if (node.left !== null) temp.push(node.left);
            if (node.right !== null) temp.push(node.right);
        }
        // 将本层结点值数组放入结果中
        res.push(valArr)
    }
    return res;
};
// @lc code=end

