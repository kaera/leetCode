let searchRange = (nums, target) => {
  let index = binarySearch(nums, target);
  if (index === -1) {
    return [-1, -1];
  }
  let start = index;
  let end = index;

  while (nums[start - 1] === target) {
    start = start - 1;
  }
  while (nums[end + 1] === target) {
    end = end + 1;
  }
  return [start, end];
};

let binarySearch = (nums, target) => {
  let startPointer = 0;
  let endPointer = nums.length - 1;
  let midPointer = 0;

  while (startPointer <= endPointer) {
    midPointer = Math.floor(startPointer + (endPointer - startPointer) / 2);
    if (target === nums[midPointer]) {
      return midPointer;
    } else if (target > nums[midPointer]) {
      startPointer = midPointer + 1;
    } else if (target < nums[midPointer]) {
      endPointer = midPointer - 1;
    }
  }
  return -1;
};
