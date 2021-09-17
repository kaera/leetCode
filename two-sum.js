/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  const hash = {};

  nums.forEach((value, index) => {
    hash[target - value] = index;
  });

  nums.forEach((value, index) => {
    if (hash[value] && hash[value] !== index) {
      result = [index, hash[value]];
    }
  });
  return result;
};
