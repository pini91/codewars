// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    return array.every((x,i)=>i==0||array[i]>=array[i-1])?'yes, ascending':
    array.every((x,i)=>i==0||array[i]<=array[i-1])?'yes, descending':'no'

}

console.log(isSortedAndHow([4,3,2,1]))

// arr.every() then calls this function on each array element x, pairing the element with its index i. The condition on the right obviously is the check to see if it's increasing, but the condition on the left is just an edge case to avoid an error when using arr[i-1]. 