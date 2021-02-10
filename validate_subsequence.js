// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

//O(n) time | O(1) space  - n the length of the array
//_____________________________________________________
// function isValidSubsequence(array, sequence) {
//   let arrInd = 0;
//   let seqInd = 0;

//   while (arrInd < array.length && seqInd < sequence.length) {
//     if (array[arrInd] === sequence[seqInd]) seqInd++;
//     arrInd++;
//   }
//   return seqInd === sequence.length;
// }

//O(n) time | O(1) space
//__________________________________________________
function isValidSubsequence(array, sequence) {
  let seqInd = 0;

  for (const value of array) {
    if (seqInd === sequence.length) break;
    if (sequence[seqInd] === value) {
      seqInd++;
    }
  }
  return seqInd === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
