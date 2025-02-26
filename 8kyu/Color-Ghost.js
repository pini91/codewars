// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function() {
    // let result = Math.random()<= .5 ? "heads" : "tails";

    //the second [] is to access this.color array, to cut the decimal. math.floor, 4 because there is 4 colors but 4 wont be included, since math.random will go from 0 to 3.9 and there is 3 indexes in the array
   this.color= ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random()*4)]
  };

  console.log(Ghost())