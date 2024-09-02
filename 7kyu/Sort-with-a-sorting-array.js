// Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

//     sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
//     sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

function sort(initialArray, sortingArray) {
    let n = initialArray.length;
    let result = [];
    for (let i=0; i<n; i++) {
      result[sortingArray[i]] = initialArray[i];
    }
    return result;
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0]))