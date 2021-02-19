//Loop Solution
//_______________________________________________________________________
/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

// /* Version 1:
//     O(n)
//     Fixed memory
//     Loops
// */
// let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let middle = Math.floor((right + left) / 2);

//     switch (compare(element, array[middle])) {
//       case -1: {
//         right = middle - 1;
//         break;
//       }
//       case 1: {
//         left = middle + 1;
//         break;
//       }
//       default: {
//         return middle;
//       }
//     }
//   }

//   return -1;
// };

//Recursive Solution
//_______________________________________________________

// let binarySearchWithRecursion = (
//   array,
//   element,
//   compare = defaultCompare,
//   left = 0,
//   right = array.length - 1
// ) => {
//   //base case
//   if (left > right) {
//     return -1;
//   }
//   const middle = Math.floor((right + left) / 2);

//   const comparison = compare(element, array[middle]);
//   //expressions instead of flow control
//   return comparison === -1
//     ? binarySearchWithRecursion(array, element, compare, left, middle - 1)
//     : comparison === 1
//     ? binarySearchWithRecursion(array, element, compare, middle + 1, right)
//     : middle;
// };

// //Dryer code - Tail recusrion
// //____________________________________________________________________________
// let binarySearchWithRecursion = (
//   array,
//   element,
//   compare = defaultCompare,
//   left = 0,
//   right = array.length - 1
// ) => {
//   //base case
//   if (left > right) {
//     return -1;
//   }
//   const middle = Math.floor((right + left) / 2);

//   const comparison = compare(element, array[middle]);

//   if (comparison === 0) {
//     return middle;
//   }

//   const newBounds =
//     comparison === -1 ? [left, middle - 1] : [middle + 1, right];
//   return binarySearchWithRecursion(array, element, compare, ...newBounds);
// };

//Dryer code - Tail recusrion + Array Splitting
//____________________________________________________________________________
let binarySearchWithArraySplitting = (
  array,
  element,
  compare = defaultCompare
) => {
  //base case
  if (array.length === 0) {
    return -1;
  }
  const middle = Math.floor(array.length / 2);

  const comparison = compare(element, array[middle]);

  if (comparison === 0) {
    return middle;
  }

  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, array.length];
  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  return subIndex === -1 ? -1 : left + subIndex;
};

console.log(binarySearchWithArraySplitting([1, 2, 6, 8, 10], 2));
