let binarySearchLeftmost = (nums, target) => {
  let startPointer = 0;
  let endPointer = nums.length - 1;

  while (startPointer < endPointer) {
    const midPointer = Math.floor((endPointer + startPointer) / 2);
    if (target > nums[midPointer]) {
      startPointer = midPointer + 1;
    } else {
      endPointer = midPointer;
    }
  }
  return target === nums[endPointer] ? endPointer : -1;
};

let binarySearchRightmost = (nums, target) => {
  let startPointer = 0;
  let endPointer = nums.length - 1;

  while (startPointer < endPointer) {
    const midPointer = Math.floor((endPointer + startPointer) / 2);

    if (target < nums[midPointer]) {
      endPointer = midPointer;
    } else {
      startPointer = midPointer + 1;
    }
  }
  return target === nums[startPointer - 1] ? startPointer - 1 : -1;
};
