function getFacturiol(number) {
    let total = 1;
    for (let x = 1; x <= number; x++) {
        total = total * x;

    }
    return total;



}

let result = getFacturiol(5);
console.log(result);