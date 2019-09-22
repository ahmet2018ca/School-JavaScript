//20. Write a JavaScript program to check from two given integers, 
//if one is positive and one is negative.

function positiveOrNegative(num1, num2) {

    if (num1 >= 0) console.log("Its positive");
    else return " Its negative";

    if (num2 >= 0) return "Your number is positive";
    else return " Its negative";
}

let res = positiveOrNegative(7, -5);
console.log(res);