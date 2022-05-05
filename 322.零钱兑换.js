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
    const map = new Map();
    map.set(0, 0);
    // n 要凑的钱
    for (let n = 1; n <= amount; n++) {
        map.set(n, Infinity);
        for (const coin of coins) {
            // 需要凑的钱 小于 硬币面额 跳过该硬币
            if (n < coin) continue;
            const sum = Math.min(map.get(n), map.get(n - coin) + 1);
            map.set(n, sum);
        }
    }
    return map.get(amount) === Infinity ? -1 : map.get(amount);
};
// @lc code=end

