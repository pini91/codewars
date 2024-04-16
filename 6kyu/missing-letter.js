// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


function findMissing(array){
    if(array.length < 1 ){
        return Error
    }else{
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const lastIndex = alphabet.indexOf(array[array.length-1]);
        let firstIndex = alphabet.indexOf(array[0]);
        let sliced = alphabet.slice(firstIndex, lastIndex);
        sliced.forEach(element =>{
            if(!array.includes(element)){
                console.log(element);
            };
        });
    };
};
