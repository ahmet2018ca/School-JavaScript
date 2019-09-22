function fixArrays(arr1, arr2) {

    let itemsCanDiveBy2 = [];
    let itemsCanDiveBy3 = [];

    const combinedArray = [...arr1, ...arr2];

    for (let x of combinedArray) {
        if (x % 2 === 0) itemsCanDiveBy2.push(x);
        if (x % 3 === 0) itemsCanDiveBy3.push(x);
    }

    // itemsCanDiveBy2 = combinedArray.filter(p => {
    //     return p % 2 == 0;
    // });
    // itemsCanDiveBy3 = combinedArray.filter(p => {
    //     return p % 3 == 0;
    // });

    console.log(itemsCanDiveBy2, itemsCanDiveBy3);
}

let itemsCanDiveBy2 = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10];
let itemsCanDiveBy3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

fixArrays(itemsCanDiveBy2, itemsCanDiveBy3);