// 

function shortenToDate(longDate) {
    return longDate.slice(0,longDate.indexOf(','))

    // return longDate.split(",")[0];
  
  }

  shortenToDate("Monday December 25, 10pm")