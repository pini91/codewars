// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
    let vowels = "aeiouAEIOU"
    let result = ""
    Array.from(s).forEach(el =>{
        if(vowels.includes(el)){
            result+= "!"
        }else{
            result+=el
        }
    })
    console.log(result)

    //OR
    //return s.replace(/[aeoiu]/ig, '!')  
}

replace("Hi!")

