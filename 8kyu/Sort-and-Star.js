// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let result =""
    let copyS = s.slice().sort()
    let splited1 = copyS[0].split("")
    splited1.forEach(element => {
        if(element!==splited1[splited1.length -1]){
        result +=`${element}***`}
        else{
            result += element
        }
    });
    console.log(result)
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])