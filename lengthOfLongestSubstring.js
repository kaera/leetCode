let lengthOfLongestSubstring = (str) => {
  let result = 0;
  let startPointer = 0;
  const letters = {};

  for (let endPointer = 0; endPointer < str.length; endPointer++) {
    if (Object.keys(letters).includes(str[endPointer])) {
      startPointer = Math.max(letters[str[endPointer]], startPointer);
    }
    result = Math.max(result, endPointer - startPointer + 1);
    letters[str[endPointer]] = endPointer + 1;
  }
  return result;
};
