/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let [index, value] of nums.entries()) {
    const secondNumberIndex = nums.indexOf(target - value, index + 1);
    if (secondNumberIndex !== -1) {
      return [index, secondNumberIndex];
    }
  }
};
