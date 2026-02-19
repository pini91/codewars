// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    const regexLower= /[a-z]/
    const regexUpper=/[A-Z]/

    return regexLower.test(a)&&regexLower.test(b)|| regexUpper.test(a)&&regexUpper.test(b)? 1:!regexLower.test(a)&&!regexLower.test(b)|| !regexUpper.test(a)&&!regexUpper.test(b)?-1:0
0
}

console.log(sameCase('C', '0'))