// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

function checkExam(array1, array2) {
    let sum =0
    for(let i = 0; i < array1.length;i++){
        if(array1[i]=== array2[i]){
            sum +=4
        }else if(array2[i]===""){
            sum+= 0
        }else{
            sum -=1
        }
    }
    if(sum<0){
        console.log(0)
    }else{
        console.log(sum)
    }
}

checkExam(["b", "c", "b", "a"], ["" , "a", "a", "c"])