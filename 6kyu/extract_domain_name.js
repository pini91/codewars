//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    url = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');
    console.log(url.split('.')[0]);
  };


  //or

  
  function domainName(url){
    let value;
     if(url.includes(".")){
        if(url.includes("www.")){
            value = url.substring(url.indexOf(".") + 1, url.indexOf(".", url.indexOf(".") + 1));
            console.log(value);
        }else if(url.includes("http://" || "https://")){
            value = url.substring(url.indexOf("/")+ 2, url.indexOf("."));
            console.log(value);
        }else{
            value = url.substring(url, url.indexOf("."));
            console.log(value);
        }
    }else{
        value = url.substring(url.indexOf("/")+2);
        console.log(value);
    }
}