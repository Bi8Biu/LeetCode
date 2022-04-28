/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    // 存放结果
    const res = [];
    // 存放序列化结果
    const treeMap = new Map();
    // 遍历
    const traverse = root => {
        if (root === null) return '#'
        const left = traverse(root.left);
        const right = traverse(root.right);
        // 将树序列化并保存
        const str = `${root.val},${left},${right}`;
        // 如果不存在，则添加
        if (!treeMap.has(str)) {
            treeMap.set(str, 1);
        } else {
            // 存在，增加次数
            treeMap.set(str, treeMap.get(str) + 1)
        }
        return str;
    }
    traverse(root);
    // 遍历 treeMap，次数大于1表示重复，将其反序列化并放入数组中
    treeMap.forEach(function (value, key) {
        if (value > 1) {
            // 反序列化
            const arr = key.split(',')
            const traverse = arr => {
                // 根节点值
                const val = arr.shift();
                if (val === '#') return null;
                const root = new TreeNode(val);
                root.left = traverse(arr);
                root.right = traverse(arr);
                return root;
            }
            res.push(traverse(arr));
        }
    });
    return res;
};
// @lc code=end

