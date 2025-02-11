// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    // let even = ""
    // let odd =" "

    // for(let i = 0; i<s.length; i++){
    //     if (i % 2 === 0) {
    //         even += s.toUpperCase()[i];
    //         odd += s[i];
    //       }else{
    //         even += s[i];
    //         odd += s.toUpperCase()[i];
    //       }
    // }
    // console.log([even,odd])

    let evens = s.split('').map((el,index)=> index%2 !==0 ?el.toUpperCase() : el ).join('')

    let odds = s.split('').map((el,index)=> index%2 ==0 ?el.toUpperCase() : el ).join('')

    let result = [odds, evens]

    console.log(result)

  };

  capitalize("abcdef")