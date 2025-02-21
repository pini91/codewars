// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

function noBoringZeros(n) {
    let numArr = n.toString().split('')
    let numArrLength = numArr.length-1
   
    while(numArr[numArrLength] === '0'){
        numArr.pop()
        numArrLength--
    }

    console.log( Number(numArr.join('')))


    // return Number(String(n).replace(/0+$/,'')); -----//When you have $, you tell the engine that whatever precedes it must start at the end of the line
  }

noBoringZeros(-1050)