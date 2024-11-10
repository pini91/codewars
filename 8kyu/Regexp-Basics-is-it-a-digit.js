// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    return /^\d$/.test(this) //^ beginning of the input $ the end of the input (to make sure is a single digit)
    //  return /^[0-9]$/.test(this);
  };

