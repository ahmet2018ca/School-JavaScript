//Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
//The array length must be greater or equal to 1.
function first_last_1(nums) {
    var end_pos = nums.length - 1;
    return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));