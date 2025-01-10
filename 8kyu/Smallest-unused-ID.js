// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


function nextId(ids){
    let missingNumber;
    ids.sort((a,b) => a-b)
    
    if(ids[0] !=0){
        console.log(0)
    }else{
        for(let i=0; i<ids.length; i++){
            if(ids[i]+1 >= ids[i+1]){
                continue
            }else{
                missingNumber = ids[i]+1
                break
            }
        }
        console.log(missingNumber)
    }

    // var x = 0;
    // while (ids.includes(x)) x++;
    // console.log(x);
}
    


nextId([0,1,2,3,5])
