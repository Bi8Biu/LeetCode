/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    // 提取实部与虚部
    const num1Arr = num1.split('+');
    num1Arr[1] = num1Arr[1].split('i')[0];
    const num2Arr = num2.split('+');
    num2Arr[1] = num2Arr[1].split('i')[0];

    // 乘法运算
    const a = num1Arr[0] * num2Arr[0];
    const b = num1Arr[1] * num2Arr[1] * -1;
    const i = num1Arr[0] * num2Arr[1] + num1Arr[1] * num2Arr[0] + 'i';
    return a + b + '+' + i
};
// @lc code=end

