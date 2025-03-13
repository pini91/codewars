// We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1
// Example
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr2 = [2, 4, 6, 8, 10, 12, 14]
// The result is: [4, 8, 5, 3]

// 4 elements present in both arrays: 2, 4, 6, 8
// 8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
// 5 elements remaning in arr1: 1, 3, 5, 7, 9
// 3 elements remaning in arr2: 10, 12, 14
// No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!


arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]

function process2Arrays(arr1, arr2) {

    let elsPresentInBoth = []

    let elsPresentInOne=[]

    arr1.forEach(element => {
        if(arr2.includes(element)){
            elsPresentInBoth.push(element)
        }else{
            elsPresentInOne.push(element)
        }
    });

    arr2.forEach(element=>{
        if(!arr1.includes(element)){
            elsPresentInOne.push(element)
        }
    })

    let remainingArr1= arr1.filter(el=> !arr2.includes(el))

    let remainingArr2= arr2.filter(el=> !arr1.includes(el))

    return [elsPresentInBoth.length, elsPresentInOne.length, remainingArr1.length, remainingArr2.length];
}

console.log(process2Arrays(arr1, arr2))