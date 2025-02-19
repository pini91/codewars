// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
    let sqrt = Math.sqrt(num) // store the square to loop faster
    for(let i = 2; i <= sqrt; i++) {
      if(num % i === 0) return false;
    }
    return num > 1;

    //this solution is correct but has a bad optimization.
    //for (var i = 2; i < n; i++) { // it will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    //    if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    //  }
    //  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }


console.log(isPrime(0))
  