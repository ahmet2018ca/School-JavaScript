var uniqueMorseRepresentations = function (words) {
    morsecode = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--.."
    ];

    let set = new Set();

    for (let word of words) {
        let mc = "";
        for (let c of word) {
            console.log(c.charCodeAt(0) - "a".charCodeAt(0));

            mc += morsecode[c.charCodeAt(0) - "a".charCodeAt(0)];
        }
        set.add(mc);
    }
    return set.size;
};
let result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);