// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.


// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 13 + 49 = 62 13+49=62 and the total weight of team 2 is  27.
// [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is  50 + 70 = 120 50+70=120 and the total weight of team 2 is  60 + 80 = 140 60+80=140.
// [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is  80 80 and the total weight of team 2 is  0 0.



function rowWeights(array){
    if(array.length === 2) return array
    if(array.length ===1) return[array[0],0]

    let firstGroup = 0
    let secondGroup = 0

    let bol= true
    let count = 0

    while(count< array.length){
        if(bol=== true) {
            firstGroup += array[count]
            bol= false
        }else if(bol === false) {
            secondGroup += array[count]
            bol=true
        }
        count++
    }

    // let team1= array.filter((el,index)=> index%2===0).reduce((acc,el)=>acc+el)
    // let team2= array.filter((el,index)=> index%2 !=0).reduce((acc,el)=> acc+el)

    return [firstGroup, secondGroup]
}

console.log(rowWeights([80,60]))