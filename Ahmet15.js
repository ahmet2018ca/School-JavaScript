//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19.

function tripleDifference(num) {
    if (num <= 19) return 19 - num;
    if (num >= 19) return (num - 19) * 3;

}
let res = tripleDifference(20);
console.log(res);