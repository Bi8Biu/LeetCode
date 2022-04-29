/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m);
    nums2 = nums2.slice(0, n);
    for (const num2 of nums2) {
        nums1.push(num2);
    }
    nums1 = nums1.sort((a, b) => {
        return a - b
    });
};
// @lc code=end

