//39. Write a JavaScript program to compute the sum of the two given integers, 
//If the sum is in the range 50..80 return 65 other wise return 80.
function sumRange(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && 80 >= sum) return 65;
    else return 80;
}

console.log(sumRange(30, 30));
console.log(sumRange(45, 55));