function isPalindrom(str) {
  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
}

console.log(isPalindrom("civice"));
