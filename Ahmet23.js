//40. Write a JavaScript program to check from two given integers 
//if either one is 8 or their sum or difference is 8.

function sumAndDifference(num1, num2) {
    let bigger = 0;
    let smaller = 0;
    if (num1 || num2 === 8) console.log("One of your number is 8 Ooooohhh magic ehh");
    if (num1 + num2 === 8) return "Sum is 8 Magician BTW lol";
    if (num1 > num2) num1 = bigger;
    else num2 = bigger;
    if (num2 == bigger) num1 = smaller;
    else num2 = smaller;
    if (bigger - smaller === 8) return "The difference is 8 btw lol got u";
}

console.log(sumAndDifference(8, 0));