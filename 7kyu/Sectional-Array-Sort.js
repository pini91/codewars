// In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order) and optionally you're given the number of items to sort.

// Inputs:
// An array to sort
// The starting index for sorting
// (Optional) The number of items to sort
// If the number of items to sort is not provided or is zero, sort the array from the starting position to the end.

// Examples:
// array: [1, 2, 5, 7, 4, 6, 3, 9, 8]
// start: 2
// length: not specified
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array: [9, 7, 4, 2, 5, 3, 1, 8, 6]
// start: 2
// length: 5
// expected result: [9, 7, 1, 2, 3, 4, 5, 8, 6]

function sectSort(array, start, length) {
    let len = length||array.length
    let head = array.slice(0, start);
    let middle = array.slice(start, start + len).sort((a, b) => a - b);
    let tail = array.slice(start + len);
  
    return head.concat(middle,tail)

    // const tail = length ? arr.splice(start + length) : []
    // const head = arr.splice(0, start)
    // const midd = arr.sort((a, b) => a - b)
  
    // return head.concat(midd, tail)
  }
  
  console.log(sectSort([1,2,3,6,5,4],3 ))


