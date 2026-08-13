// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {

    if(!text){ return []}

    let result =[]

    for(let i=0; i< text.length; i++){

        let exist = result.find(pair => pair[0]===text[i])

        if(!exist){
            count = Array.from(text).filter((el,_) => el === text[i]).length
            result.push([text[i], count])
        }
    }
    console.log(result)
}

orderedCount("abracadabra")