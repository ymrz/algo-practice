// const _ = require("lodash");

// function sayHello() {
//   console.log("Hello, World");
// }

// _.times(5, sayHello);

//
// Your previous Java content is preserved below:
//
// /**
//  * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//  *
//  *         An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once.
//  *
//  *
//  *
//  *         Example 1:
//  *
//  *         Input: strs = ["eat","tea","tan","ate","nat","bat"]
//  *         Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//  *         Example 2:
//  *
//  *         Input: strs = [""]
//  *         Output: [[""]]
//  *         Example 3:
//  *
//  *         Input: strs = ["a"]
//  *         Output: [["a"]]
//  */
// public class Solution {
//
//     public static void main (String[] args) {
//     }
// }

function anagrams(arr) {
  const result = [];

  //        if(!arr.length) {
  //          //return empty array
  //          return
  //      } else if(arr.length === 1) {

  //        return result.push(arr[0])

  //      } else {
  //        //we have multiple items in the array
  //        //check length and characters

  //        //sets or hash map
  //        //key: value
  //        //sorting

  //        //arr[i] = str

  let hashMap = new Map();

  //O(n)

  for (let i = 0; i < arr.length; i++) {
    // O(1)
    let str1 = arr[i].split("").sort().join("");

    if (hashMap.has(str1)) {
      //asigne the value to the key
      //aet: eat, ate, tea

      //{...obj1, ...obj2}

      let values = hashMap.get(str1);
      // O(1)

      hashMap.set(str1, [...values, arr[i]]);
    } else {
      //push the key
      //ant:
      hashMap.set(str1, [arr[i]]);
      console.log("hashmap", hashMap);
    }
  }
  return result;
}

console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// str1=str.split('').sort().join('')
