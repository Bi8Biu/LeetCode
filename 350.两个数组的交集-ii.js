/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 结果栈
    const res = [];
    // 将数组转为 hash map，键为数组成员，值为成员在数组中出现的次数
    const initMap = arr => {
        const m = new Map();
        for (const item of arr) {
            const count = m.get(item);
            if (count) {
                m.set(item, count + 1);
            } else {
                m.set(item, 1);
            }
        }
        return m;
    }
    // 将 nums1 ， nums2 转为hash map
    const m1 = initMap(nums1);
    const m2 = initMap(nums2);
    // 遍历 m1
    for (const val of m1) {
        // val 为两个元素的数组： [原数组成员, 在原数组中出现的次数]
        // count 记录相同元素出现的最小次数
        let count = 0;
        // 获取 m2 中查找  m1 中的元素 出现的次数
        let m2Count = m2.get(val[0]);
        // m2 中出现过 m1 中的元素
        if (m2Count) {
            // 比较次数，选择较小的次数
            count = Math.min(val[1], m2Count);
            // 将该元素 根据 count 次数 推入结果栈
            for (let i = 0; i < count; i++) {
                res.push(val[0])
            }
        }
    }
    // 返回结果栈
    return res;
};
// @lc code=end

