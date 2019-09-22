var flipAndInvertImage = function (arr) {
    let result = [];
    for (let line of arr) {
        let reversedLine = line.reverse();
        let invertedLine = reversedLine.map(p => 1 - p);
        result.push(invertedLine);
    }

    console.log(result);
};

const arr1 = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
];
const arr2 = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
];
let answer = flipAndInvertImage(arr1);
console.log(answer);