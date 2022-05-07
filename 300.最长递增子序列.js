/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp: dp[0] 表示以 nums[0] 结尾元素的最长递增子序列，dp[1] 表示以 nums[1] 结尾元素的最长递增子序列
    let dp = new Array(nums.length);
    dp.fill(1);

    // 遍历 nums
    for (let i = 1; i < nums.length; i++) {
        // 找出之前出现的比该元素小的元素, 
        for (let j = 0; j < i; j++) {
            // 因为 nums[j] < nums[i], 所以 加上 nums[i] 可以组成新的递增序列, 长度为 原子序列长度 + 1
            // 在组成的新递增子序列中，将最长的子序列保存到 dp
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }

    // 遍历dp 找到最大值返回
    let res = 0;
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res;
};
// @lc code=end

