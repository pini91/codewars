// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let goodCount = 0
    x.forEach(element => {
        if(element==="good"){
            goodCount ++
        }   
    });
    return (goodCount<=0) ? "Fail!" :(goodCount>0 && goodCount<3)? "Publish!": "I smell a series!"

}


console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))