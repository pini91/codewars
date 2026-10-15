// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let result = x.split('').map((el, _)=>{
        if(el==="a") {return "b"}
        if(el==="b") {return "a"}
        return el
    })
    return result.join('')

    //other const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
}

console.log(switcheroo('abc'))