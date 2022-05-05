/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const map = new Map();
var coinChange = function (coins, amount) {
    const arr = new Array(amount + 1);
    arr.fill(Infinity);
    arr[0] = 0;
    // n 要凑的钱
    for (let n = 1; n < arr.length; n++) {
        for (const coin of coins) {
            // 需要凑的钱 小于 硬币面额 跳过该硬币
            if (n < coin) continue;
            arr[n] = Math.min(arr[n], arr[n - coin] + 1)
        }
    }
    return arr[amount] === Infinity ? -1 : arr[amount];
};
// @lc code=end

