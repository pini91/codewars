// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]


function getLargerNumbers(a, b) {
    let result =[]
    for(let i=0; i<a.length; i++){
        let biggest= Math.max(a[i], b[i])
        result.push(biggest)  
            
        }
    console.log( result)
  }

 getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])


// let lista1= [1,2,3,4,5]
// let lista2=[5,4,3,2,1]

// let bigger= Math.max(lista1[0], lista2[0])


// for(let i=0; i< )

// console.log(bigger)