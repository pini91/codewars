// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// Return the output array, and ignore all non-op characters
function parse( data ){
    let valid=["i","d","s","o"]
    let mat=0;
    let nova= [];
    let final =[];
    data.toLowerCase().split('').forEach(element=> {
        if(valid.includes(element)){
            nova.push(element);
    }});
    nova.forEach(element=>{
        if(element==="i"){
            mat+=1;
        }else if(element==="d"){
            mat-=1;
        }else if(element==="s"){
            mat*=mat;
        }else if(element==="o"){
            final.push(mat);
        }
    })
    return final;
}

