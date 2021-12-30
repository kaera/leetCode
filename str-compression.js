/**
 * @param {string} str
 * @return {string}
 */
var strCompression = function (str) {
  for (let i = str.length; i--; i >= 0) {
    if (str[i - 1] === str[i]) {
      str = str.substr(0, i - 1) + str.substr(i);
    }
  }
  return str;
};
