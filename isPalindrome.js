var isPalindrome = function (str) {
  str = str.replace(/[' ',:]/g, "").toLowerCase();
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }
  return str;
};

function swap(str, i, j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}
