function getReport(arr) {

    // arr --> marks

    let filter1 = arr.filter(x => {
        return x.name[x.name.length - 1] == "a";
    });

    console.log(filter1);

    // let arrMarks = [];
    // for (let x of arr) {
    //     arrMarks.push(x.mark);
    // }

    // minNumber = Math.min(...arrMarks);
    // maxNumber = Math.max(...arrMarks);
    // avarageNumber = arrMarks.reduce((total, item) => total + item) / arrMarks.length

    // console.log(
    //     "En düşük not", minNumber, "\n",
    //     "En yüksek not", maxNumber, "\n",
    //     "Ortalama not", avarageNumber.toFixed(2)
    // );
}

getReport([{
        name: "Burak",
        mark: 90
    },
    {
        name: "Ahmet",
        mark: 81
    },
    {
        name: "Anisa",
        mark: 85
    },
    {
        name: "Nesli",
        mark: 70
    },
    {
        name: "Ali",
        mark: 60
    },
    {
        name: "Tom",
        mark: 80
    },
    {
        name: "Mike",
        mark: 55
    },
    {
        name: "Melaine",
        mark: 70
    },
    {
        name: "Melissa",
        mark: 80
    },

]);