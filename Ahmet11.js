const arr1 = [2, 3, 2, 5, 6, 6, 9, 10];
const arr2 = [3, 3, 8, 5, 12, 12, 16, 17, 20, 1];
const arr3 = [];

let res = new Set([...arr1, ...arr2]);

console.log(res);

// for (let x of arrMerge) {
//     if (arr3.indexOf(x) < 0) arr3.push(x);
// }

// console.log(arr3);

// let res = arr3.sort((a, b) => {
//     return a < b;
// });
// console.log(res);