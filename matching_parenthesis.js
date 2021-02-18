// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

//O(n) time | O(1) space
//__________________________________________________
// function matchParen(sentence, openParIdx) {
//   let openNestedParens = 0;

//   for (let i = openParIdx + 1; i < sentence.length; i++) {
//     const char = sentence[i];

//     if (char === "(") {
//       openNestedParens += 1;
//     } else if (char === ")") {
//       if (openNestedParens === 0) {
//         return i;
//       }
//       openNestedParens -= 1;
//     }
//   }
// }

//O(n) time | O(n) space
//____________________________________________
// function matchParen(sentence) {
//   const openingBrackets = "(, {, [";
//   const closingBrackets = "), }, ]";

//   const matchingBrackets = { "(": ")", "{": "}", "[": "}" };

//   const stack = [];

//   for (const char of sentence) {
//     if (openingBrackets.includes(char)) {
//       stack.push(char);
//     } else if (closingBrackets.includes(char)) {
//       if (stack.length == 0) {
//         return false;
//       }
//       if (stack[stack.length - 1] === matchingBrackets[char]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// function isValid(code) {

//   const openersToClosers = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };

//   const openers = new Set(['(', '[', '{']);
//   const closers = new Set([')', ']', '}']);

//   const openersStack = [];

//   for (let i = 0; i < code.length; i++) {
//     const char = code.charAt(i);

//     if (openers.has(char)) {
//       openersStack.push(char);
//     } else if (closers.has(char)) {
//       if (!openersStack.length) {
//         return false;
//       }
//       const lastUnclosedOpener = openersStack.pop();

//       // If this closer doesn't correspond to the most recently
//       // seen unclosed opener, short-circuit, returning false
//       if (openersToClosers[lastUnclosedOpener] !== char) {
//         return false;
//       }
//     }
//   }
//   return openersStack.length === 0;
// }

console.log(matchParen(" (like this (and this))) "));
