//25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function multipleBy3And7(num) {
    if (num % 3 === 0) console.log("This number is a multiple of 3");
    else return "This number is not multiple by 3";
    if (num % 7 === 0) return num && "This number is a multiple of 7";
    else return "This number is not multiple by 7";
}

let res = multipleBy3And7(24);
console.log(res);