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
var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    if (amount <= 0) return -1;
    let res = Infinity;
    for (const coin of coins) {
        const sum = coinChange(coins, amount - coin);
        if (sum === -1) continue;
        res = Math.min(res, sum + 1)
    }
    return res === Infinity ? -1 : res;
};
console.log(coinChange([1, 2, 5], 11))
// @lc code=end

