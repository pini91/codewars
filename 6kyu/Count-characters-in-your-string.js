// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let result = {}
    for(let i = 0;i< string.length;i++){
    let letter = string.charAt(i)
    if(!result[letter]){
        result[letter] =1;
    }
    else{
        result[letter]+=1
        }
    }
    return result
//OR
//let result = {};

// Iterate over each character of the string
// string.split("").forEach(char => {
//     Increment the count of the character in the object
//     result[char] = (result[char]||0) + 1;
// });
// return result

}

console.log(count('aba'))
