// let numbers = [35, 42, -20, 3, -66];
// let newArr = numbers.map(p => p * -1);
// console.log(newArr);

let word = "aaabbbccccc";

//  a -> x
//  b -> y
//  c -> z

const formula = {
    "a": "x",
    "b": "y",
    "c": "z",
};

let arr = [...word];
let res = arr.map(x => formula[x]);

console.log(res);