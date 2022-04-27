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
    let res = [];
    const traverse = root => {
        if (root === null) return res.push('null');
        res.push(root.val)
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // "1,2,#,4,#,#,3,#,#,";
    const TreeArr = data.split(',');
    const traverse = TreeArr => {
        const val = TreeArr.shift();
        const root = new TreeNode(val);
        if (val === 'null') return null;
        root.left = traverse(TreeArr);
        root.right = traverse(TreeArr);
        return root;
    }
    return traverse(TreeArr);
};



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

