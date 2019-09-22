//16. Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum.

function tripleSum(num1, num2) {
    if (num1 === num2) return (num1 + num2) * 3;
    else return "Give me two same value integer";
}

console.log(tripleSum(7, 8));
console.log(tripleSum(5, 5));