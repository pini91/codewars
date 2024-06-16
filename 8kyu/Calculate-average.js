// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if(array.length == 0){
        return 0
    }else{
        let avg = array.reduce((acc,el)=> acc+el,0)/array.length
        console.log(avg)
    }
}

findAverage([1,1,1])