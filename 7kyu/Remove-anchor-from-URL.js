// omplete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor(url){;
    if(url.includes("#")){
    let index = url.indexOf('#')
    let newString= url.slice(0,index)
    console.log(newString)
    }else{
        console.log(url)
    }
    //or return url.split('#')[0];
    //or return url.replace(/#.*/gi,"")
}

console.log(removeUrlAnchor('www.codewars.com/katas/#1212'))