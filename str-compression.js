/**
 * @param {string} str
 * @return {string}
 */
var strCompression = function (str) {
  let hash = {};
  str.split("").forEach((item) => {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
  });
  return Object.keys(hash)
    .map((key) => key + hash[key])
    .join("");
};
