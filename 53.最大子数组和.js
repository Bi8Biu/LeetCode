/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法，超时
// var maxSubArray = function (nums) {
//     let res = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         let temp = nums[i];
//         res = Math.max(res, temp);
//         for (let j = i + 1; j < nums.length; j++) {
//             temp += nums[j];
//             res = Math.max(res, temp);
//         }
//     }
//     return res;
// };
// 动态规划
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
// @lc code=end

