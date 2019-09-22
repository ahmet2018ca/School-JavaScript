//15. Write a JavaScript 
//program to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolute difference. 

function number13(num) {
    if (num < 13) {
        return 13 - num;
    }
    if (num > 13) {
        return (num - 13) * 2;
    }
    if (num === 13) return "Your number equals 13";

}

let res = number13(14);
//console.log(res);

function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(13));
console.log(difference(13));