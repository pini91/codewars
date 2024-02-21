//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

function sum_mix(arr){
    sum = 0
    arr.forEach(element => {
        sum+= Number(element)
    });
    console.log(sum)
}
sum_mix(['1', 2, '3'])
