// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    let arr = str.split(' ')
    let result = []
    arr.forEach(el =>{
        reversedEl = el.split('').reverse().join('')
        result.push(reversedEl)
    })
    console.log(result.join(' '))

    //or  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

reverseWords('The quick brown fox jumps over the lazy dog.')
