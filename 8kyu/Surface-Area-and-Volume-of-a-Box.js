// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let area =  2 * ((width * height) + ((depth*height)) + (width*depth)); 
    let volume = width*height*depth
    console.log([area, volume])
    
}


getSize(4, 2, 6)