/**
 * @param {string} str
 * @return {string}
 */
var strCompression = function (str) {
  let result = "";
  let count = 1;

  for (let i = 0; i <= str.length - 1; i++) {
    let currentLetter = str[i];

    if (currentLetter === str[i + 1]) {
      count += 1;
    } else {
      result += `${currentLetter}${count}`;
      currentLetter = str[i + 1];
      count = 1;
    }
  }

  return result;
};
