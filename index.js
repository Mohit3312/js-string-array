// 1. How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial

// Program - 1

// const publication = "freeCodeCamp";
// console.log(publication);

// publication[0].toUpperCase() will return F

// const newPublication = publication[0].toUpperCase() + publication.slice(1);
// console.log(newPublication);

// --------------------------------------------------------------

// Program - 2

// const mySentence = "freeCodeCamp is an awesome resource";
// console.log(mySentence);

// const words = mySentence.split(" ");
// console.log(words);

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// console.log(words);
// console.log(words.join(" "));

// --------------------------------------------------------------

// Program - 3

// const mySentence = "freeCodeCamp is an awesome resource";
// console.log(mySentence);

// const words = mySentence.split(" ");

// const newSentence = words
//   .map((word) => {
//     return (word = word[0].toUpperCase() + word.slice(1));
//   })
//   .join(" ");

// console.log(newSentence);

// -------------------------------------------------------------------------------------------------

// 2. Count Duplicates in Array

// input
// const items = ["a", "b", "a", "c", "d", "d", "c", "d", "e"];

// output: {a:2, b:1, c:2, d:3, e:1}

// function countDuplicates(data) {
//   const output = {};

//   data.forEach((d) => {
//     output[d] = (output[d] || 0) + 1;
//   });
//   return output;
// }

// console.log(countDuplicates(items));

// ----------------------------------------------------------------------------------------------

// 3. Reverse a string

// const input = "I Love Javascript";

// // output: JavaScript Love I

// // console.log(input.split(" ").reverse().join(" ")); // One line Logic

// function reverseString(data) {
//   // Step 1: Convert string to array
//   const arr = data.split(" ");

//   // Step 2: Reverse the array
//   arr.reverse();

//   // Step 3: Convert Array back to String
//   return arr.join(" ");
// }

// console.log(reverseString(input));

// --------------------------------------------------------------------------------------------------

// 4. Reverse each word of a String

// const input = "I Love JavaScript";

// // output: I evoL tpircSavaJ

// function reverseString(data) {
//   // Step 1: Convert string to array
//   const arr = data.split(" ");

//   // Step 2: Iterate through the array and reverse it
//   const result = arr.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   // Step 3: Convert Array back to String
//   return result.join(" ");
// }

// console.log(reverseString(input));

// -----------------------------------------------------------------------------------------------

// 5. Sort string in Asc order of word length

// const input = "Learning JavaScript is Fun";

// // output: is Fun Learning JavaScript

// function sortString(data) {
//   // Step 1: Convert string to array
//   const arr = data.split(" ");

//   // Step 2: Sort the array
//   arr.sort((a, b) => {
//     return a.length - b.length;
//   });

//   // Step 3: Convert Array back to String
//   return arr.join(" ");
// }

// console.log(sortString(input));

// -------------------------------------------------------------------------------------------

// 6. Program to replace all occurrence of a string

// const input = "Skills I must know before I learn ReactJS";

// // output: Skills You mus know before You learn ReactJS

// const result = input.split("I").join("You");
// console.log(result);

// ----------------------------------------------------------------------------------------------

// 7. How to remove duplicate value from an Array

// I/P:  [1,1,4,4,5,6,6]
// O/P: [1,4,5,6]

// 1st method
// ----------

// const array = [1, 1, 4, 4, 5, 6, 6];
// const newArray = [...new Set(array)];
// console.log(newArray);

// 2nd method
// ----------

// const array = [1, 1, 4, 4, 5, 6, 6];
// const newArray = array.filter((item, i) => {
//   return array.indexOf(item) === i; // For unique numbers
//   // return array.indexOf(item) !== i; // For duplicate numbers
// });
// console.log(newArray);

// 3rd method
// ----------

// const array = [1, 1, 4, 4, 5, 6, 6];
// let newArray = [];
// array.forEach((item) => {
//   if (!newArray.includes(item)) {
//     newArray.push(item);
//   }
// });
// console.log(newArray);

// 4th method
// ----------

// const arr = [1, 1, 4, 4, 5, 6, 6];
// const removeDuplicate = (newArr) => {
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === newArr[i + 1]) {
//       newArr.splice(i, 1);
//     }
//   }
//   return newArr;
// };
// console.log(removeDuplicate(arr));

// 5th method
// ----------

// const arr = [1, 1, 4, 4, 5, 6, 6];
// let unique = [];
// const removeDuplicate = (newArr) => {
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === newArr[i + 1]) {
//       continue;
//     } else {
//       unique.push(newArr[i]);
//     }
//   }
//   return newArr;
// };
// removeDuplicate(arr);
// console.log(unique);
