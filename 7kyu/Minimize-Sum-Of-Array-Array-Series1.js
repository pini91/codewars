// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 

function minSum(arr) {
    let sum = 0;
    let array = arr.sort((a, b) => a - b);
    while (array.length) {
      sum += array.pop() * array.shift();
    }
    return sum;
}

console.log(minSum([12,6,10,26,3,24]))