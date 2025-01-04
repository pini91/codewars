// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
    let r ={
        terrible:0,
        poor:0.05,
        good:0.10,
        great:0.15,
        excellent:0.20
      }
    
    //   if list of keys is too long:
    //   const r = Object.fromEntries(
    //       Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
    //     );// To make the entries in the dictionary lowerCase
      rating = rating.toLowerCase();
    
      if(rating in r){
        let tip = Math.ceil(amount * r[rating])
        return tip
          
      }else{
        return "Rating not recognised"
        }

        // return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised"; //ALSO LIKE THIS
}


calculateTip(20, "Excellent")