// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let strings=0
    let integers=0

    x.forEach(element => {
        if(typeof element === 'number'){
            integers+=element
        }else{
            strings += Number(element)
        }
    });
    console.log(integers - strings)

}

divCon([9, 3, '7', '3'])