function median(data) {
    let arr = data.sort((a, b) => (a - b));
    let median_index = Math.floor(arr.length / 2);
    let node1 = arr[median_index];
    let node2 = arr[median_index + 1];
    return (node1 + node2) / 2;
}

var assert = require("assert");

if (!global.is_checking) {

    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");

    // len = 6
    // 0  1   2  3    4  5    
    // 3, 6, 10, 15, 20, 99

    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log(
        "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
    );
}