/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 数组 API 解法
// var containsDuplicate = function (nums) {
//     for (const i in nums) {
//         if (nums.lastIndexOf(nums[i]) != i) return true;
//     }
//     return false
// };
// hash map 解法
var containsDuplicate = function (nums) {
    const map = new Map();
    for (const val of nums) {
        if (map.has(val)) return true
        map.set(val, 1);
    }
    return false
};
// @lc code=end

