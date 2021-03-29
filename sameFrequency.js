function sameFrequency(num1, num2) {
  let checker = {};

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  for (let val of strNum1) {
    checker[val] ? (checker[val] += 1) : (checker[val] = 1);
    console.log(checker);
  }

  for (let val of strNum2) {
    if (!checker[val]) {
      return false;
    } else {
      checker[val] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
