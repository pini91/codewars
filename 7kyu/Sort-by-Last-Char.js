// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    //let result = x.sort((a,b)=>a.slice(-1)>b.slice(-1)?1:a.slice(-1)<b.slice(-1)?-1: 0)
    let result = x.split(' ').sort((a,b)=> a.slice(-1)>b.slice(-1)?1: b.slice(-1)>a.slice(-1)?-1:0)
    console.log( result)

}

last('man i need a taxi up to ubud')

// let nombre = "brenda"
// let ultima  = nombre.slice(-1)
// console.log(ultima)