// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let arr = []
    let newStr = str.toLowerCase().split('')
    newStr.forEach(element => {
        if(!arr.includes(element)){
            arr.push(element)}
    });
    return arr.length === newStr.length
}

console.log(isIsogram("aba"))