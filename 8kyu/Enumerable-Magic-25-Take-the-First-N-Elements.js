// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
    let result= []
    if(arr === null){
        return []
    }else if(arr.length < n){
        return arr
    }else{
        for(let i=0; i<n; i++){
            result.push(arr[i])
        }
    }    
    return result

    //OR
    // return arr.slice(0, n);
}

console.log(take([-41,19], 15))