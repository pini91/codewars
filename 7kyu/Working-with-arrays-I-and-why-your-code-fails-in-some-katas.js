// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

function withoutLast(arr) {
    // Fix it
    // arr.pop(); // removes the last element
    // return arr;

    let result= arr.slice(0, -1)
    return result
  }

console.log(withoutLast([ 75, 88, 75, 99 ]))


// The lessons here were: read the docs and DON'T MUTATE THE INPUT
 
// Some katas use the input after you've processed it
// (in this case I made that on purpose),
// mutating it makes the tests fail, so watch out. 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array