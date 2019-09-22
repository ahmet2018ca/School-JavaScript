//19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.

function checkingNumber(num) {
    if (num >= 20 && 100 >= num) return "Your number is 20 or 100 or between them";
    if (num >= 100 && 400 >= num) return " Your number is 100 and 400 or between them";
    if (num >= 400) return " Your number is bigger or equal to 400";

}
let res = checkingNumber(20);
console.log(res);