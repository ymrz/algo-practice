// frequency counter

// function areThereDuplicates() {
//   let collection = {};

//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//     console.log("bested", collection[arguments[val]]);
//   }

//   for (let key in collection) {
//     if (collection[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

//multiple pointers

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);

  let first = 0;
  let second = 1;

  while (second < args.length) {
    if (args[first] === args[second]) {
      return true;
    }
    first++;
    second++;
  }

  return false;
}

//O(logn) - linear
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 2));
