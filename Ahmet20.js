//29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). 
//Return true if one or more of them are in the said range. 
function checkThreeNums(x, y, z) {

    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(check_three_nums(50, 90, 99));