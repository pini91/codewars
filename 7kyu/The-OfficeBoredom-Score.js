// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'


function boredom(staff){
    let positions= []
    let ranks = []

    let lista={
            "accounts":1,
            "finance":2,
            "canteen":10,
            "regulation":3,
            "trading":6,
            "change":6,
            "IS":8,
            "retail":5,
            "cleaning":4,
            "pissing about":25}
    for(let x in staff){
        positions.push(staff[x])
    }
    for(let x in lista){
        for(let i = 0; i<=positions.length; i++){
            if(x===positions[i]){
                ranks.push(lista[x])
            }
        }
    }
    let result= ranks.reduce((acc,el)=> acc+=el)
    if(result<=80){
        return "kill me now"
    }else if(result<100 && result>80){
        return "i can handle this"
    }else{
        return "party time!!"
    }


//OR
//    var score = Object.keys(staff).reduce(
//     function(a,b){       
//       return a+map[staff[b]]
//    },0); 
  
//   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';




//OR
// function boredom(staff){
//     let val = Object.keys(staff).reduce((acc, cur) => acc + SCORES[staff[cur]], 0);
      
//     if (val <= 80) return 'kill me now';
//     if (val > 100) return 'party time!!';
//     return 'i can handle this';
}
  

console.log(boredom({ tim: 'IS', jim: 'finance',
randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
alex: 'regulation', john: 'accounts', mr: 'canteen' }))


