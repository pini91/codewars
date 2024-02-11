// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    let result=[]
    let setArr= {}

    //here well get the count of each element and push it into the setArr variable
    for(let num of array){
        setArr[num]= setArr[num] ? setArr[num]+1 : 1
    }
   
    //Here we are basically filtering the elements that have 2 or 3 counts and pushing them into result
    for(let x in setArr){
        if(setArr[x]=== 2||setArr[x]=== 3){
            result.push(x)
        }
    }
    
    // We compare the length of result.length and setArr. If they are the same it means all the elements in the array are 2 or 3 counts
   return result.length=== Object.keys(setArr).length ?true : false
     
}

console.log(checkThreeAndTwo(["a","a","a","b","b"]))