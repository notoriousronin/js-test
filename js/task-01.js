// const array = [1, 2, 2, 4, 5, 6, 6]; //find the sum of array elements

// let sum = eval(array.join("+"));
// console.log(sum);

// let sum = array.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);
///////////////////////////////////////////////////////////////////////////

// const array = [1, 2, 2, 4, 5, 6, 6, 10, 55, 78]; //find the biggest num in array
// console.log(Math.max.apply(null, array));

// console.log(Math.max(...array));

// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//   max = Math.max(array[i], max);
// }

// for (let i = 0; i < array.length; i++) {
//   max = array[i] > max ? array[i] : max;
// }

// console.log(max);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max);
//////////////////////////////////////////////////////////////
// const array = [6, 4, 5, 2, 10, 55, 6, 1, 2, 78];'///sort array

// console.log(array.sort((a, b) => a - b));

// const users = [
//   {
//     name: "Chris Bumstead",
//     age: 27,
//   },
//   {
//     name: "David Laid",
//     age: 26,
//   },
//   {
//     name: "alex Eubank",
//     age: 24,
//   },
// ];

// users.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.log(users);
// // users.sort((u1, u2) => {
// //   if (u1.name < u2.name) {
// //     return -1;
// //   }
// //   if (u1.name < u2.name) {
// //     return 0;
// //   }
// //   return 0;
// // });
// // console.log(users);
///////////////////////////////////////////////////

const array = [6, 4, 5, 2, 10, 55, 6, 1, 2, 78];

let uniqueNumbers = new Set(array);
console.log(uniqueNumbers);

// const reversed = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   reversed.push(array[i]);
// }

// console.log(reversed);
