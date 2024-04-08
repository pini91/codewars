// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    let filtered = a.filter(el => el<=limit)
    if(filtered.length === a.length){
        console.log(true)
    }else{
        console.log(false)
    }

}

smallEnough([101, 45, 75, 105, 99, 107], 107)