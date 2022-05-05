/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // 为0 返回0
    if (n === 0) return 0;
    // 保存前两项值
    let fib_1 = 0;
    // 保存前一项值
    let fib_2 = 1;
    // base case
    const dp = n => {
        for (let i = 1; i < n; i++) {
            // 当前项 = 前两项 + 前一项
            let res = fib_1 + fib_2;
            // 为下一项计算做转呗，更新 fib_1 fib_2
            // 更新前两项为前一项
            fib_1 = fib_2;
            // 更新前一项为当前项
            fib_2 = res;
        }
    }
    dp(n);
    // 返回前一项（当前项）
    return fib_2;
};
// @lc code=end

