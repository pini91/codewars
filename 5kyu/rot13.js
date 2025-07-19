// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let alphabet={
        'A': 'N',
        'B':'O',
        'C':'P',
        'D':'Q',
        'E':'R',
        'F':'S',
        'G':'T',
        'H':'U',
        'I':'V',
        'J':'W',
        'K':'X',
        'L':'Y',
        'M':'Z',
        'a': 'n',
        'b':'o',
        'c':'p',
        'd':'q',
        'e':'r',
        'f':'s',
        'g':'t',
        'h':'u',
        'i':'v',
        'j':'w',
        'k':'x',
        'l':'y',
        'm':'z'
    }
    const re= message.split('')

    let result = re.map((el)=>{
        if(el in alphabet){
          return alphabet[el]
        }else if(Object.values(alphabet).includes(el)){
          return Object.keys(alphabet).find(key=> alphabet[key]===el) 
        }
        return el
    })

    result= result.join('')
    return result
}

rot13('tCnN8]wHD"a<rmT')
