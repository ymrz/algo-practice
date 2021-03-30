//sorted array. the average of 2 pairs === target

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
