/**
 * @param {string} str
 * @return {string}
 */
let compress = (str) => {
  let readPointer = 1;
  let writePointer = 0;
  let strLength = 1;

  if (str.length <= 1) {
    return str;
  }

  while (readPointer <= str.length - 1) {
    if (str[readPointer] === str[writePointer]) {
      readPointer += 1;
    } else {
      str =
        str.substr(0, writePointer + 1) +
        str[readPointer] +
        str.substr(writePointer + 2);
      writePointer += 1;
      readPointer += 1;
      strLength += 1;
    }
  }
  return str.substr(0, strLength);
};
