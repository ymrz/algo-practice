// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.
// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

//o(n^2) time | O(1) space

// function twoNumberSum(arr, targetSum) {
//   for (let i = 0; i < arr.length; i++) {
//     const firstNum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const secondNum = arr[j];
//       const sum = firstNum + secondNum;

//       if (sum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

function twoNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = arr[leftPointer] + arr[rightPointer];

    if (currentSum === targetSum) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer++;
    } else if (currentSum > targetSum) {
      rightPointer--;
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
