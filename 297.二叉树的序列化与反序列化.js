/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // 使用数组存放每个节点
    let res = [];
    // 迭代遍历
    const traverse = root => {
        // 遍历退出
        if (root === null) return res.push('null');
        // 先序遍历，先放入根节点值
        res.push(root.val)
        // 迭代左节点
        traverse(root.left);
        // 迭代右节点
        traverse(root.right);
    }
    traverse(root);

    // 将所有节点 先序排列 组成的数组使用 ',' 连接为字符串并返回
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // 将序列化后的字符串分割为数组
    const TreeArr = data.split(',');
    // 迭代，生成树
    const traverse = TreeArr => {
        // 由于是先序排列的，所以第一个元素为根节点
        // 出队
        const val = TreeArr.shift();
        // 若节点为空，退出迭代
        if (val === 'null') return null;
        // 生成树，值为出队的值
        const root = new TreeNode(val);
        // 由于是先序排列的，左节点为根节点后一个元素，即当前队列的第一位，进行迭代左子树
        root.left = traverse(TreeArr);
        // 左树遍历完毕，当前队列第一位为右子树，进行迭代右子树
        root.right = traverse(TreeArr);
        // 返回节点
        return root;
    }

    return traverse(TreeArr);
};



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

