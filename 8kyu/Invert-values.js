// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

function invert(array) {
    newArray = []
    array.forEach(element => {
        if(element<0){
            newArray.push(Math.abs(element))
        }else{
            newArray.push(-Math.abs(element))
        }
    });
    console.log(newArray)
 }

 //or return array.map(num => -num)

 invert([1,-2,3,-4,5])