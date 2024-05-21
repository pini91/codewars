function countSmileys(arr) {
    let regex = /[:;][-~]?[)D]/;
    let sum = 0;
    arr.forEach(el => {
        if(regex.test(el)){
            sum++
        }
    });
    return sum;
  }