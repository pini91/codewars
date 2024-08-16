// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){
    let bossScore = 0
    let values = Object.values(meet).reduce((acc,el)=> acc+el)
    for(let x in meet){
        if(x===boss){
            bossScore+=meet[x]
        }
    }
    let totalPeople = Object.keys(meet).length
    let result = (values + bossScore)/totalPeople
    if(result <=5){
        return 'Get Out Now!'
    }else {
        return 'Nice Work Champ!' 
    }

    //OR
    // let names = Object.keys(meet)
    //  let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
    //  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'

}

console.log(outed({"tim":6,"jim":8,"randy":5,"sandy":4,"andy":1,"katie":4,"laura":7,"saajid":5,"alex":8,"john":1,"mr":3} , "tim"))
