// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let result = ""
    let splited = s.split('')
    for(let i=0; i< splited.length; i++){
        if(i === 0){
            result+=`${(splited[i])}-`
        }else if(i !== splited.length -1){
            result+=splited[i].toUpperCase()
            result+=`${splited[i].toLowerCase().repeat(i)}-`
        }else{
            result+=splited[i].toUpperCase()
            result+=splited[i].toLowerCase().repeat(i)
        }
    }
    console.log(result)
}

//OR
//return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

accum("ZpglnRxqenU")