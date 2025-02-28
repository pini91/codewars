// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        if(str[i].match(/[a-z]/g)){
            result+= str[i]
        }
    }
    console.log(result.length)

    // return str.replace(/[^a-z]/g, "").length
}

lowercaseCount("abcABC123?!@#$%^&*()+")

