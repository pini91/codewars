// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption


// let arr= ["arjlylnkq", "fbsqohvvjwk", "vbpyffcqp", "ltuzjou", "gphykdjgn", "rbdzbv", "dkbjjetdqjsbbxv", "vcffnmyfbey", "onipskohl", "sscauglmd", "mrokebxudnwt", "vaxmeuqpg", "fihqpqbhnws", "jktvirg", "uijaprwlkp", "kzgitzxarsw", "arkbgroidd", "xvrinsesu", "fqgrpddwqh", "enkympukgo", "yrjkstcvhzx", "mjybpl", "yynvtnvhu", "vuaavxnjurzdo", "dbdanhypsiehx", "veofctohpatim", "zcmrnmloicogb", "iixumb", "cuxecyjdoqxxejz", "vpxzvmyp", "bijynueloa", "tixqbtjcvt", "edtgykjrprc", "vdoetezm", "tcrgshhcltp", "yudjayagto", "kqplxlnqsplq", "njljtoftykfleo", "rvrecartybgjjobm", "ghafzbqgym", "vumyktsfot", "wcuzqazkiglm", "ylaitan", "eoaborq", "wdbvmxavbqp", "ahcjyzzxsfci", "bhmjbpgpg", "bcisxzyunummncr", "bughdkgeogsyn", "vlnpgmuvmqa", "lbsjwhjxxraei", "ylexwuxqq", "qkggetjaq", "krvtsbkah", "tlwirmgoe", "goouuqalz", "uzletab", "smravvfafurbso", "vsrookaqqeb", "xtwtcdzrhdfxgq", "hssvrf", "bvizpkjh", "zpmnemo", "sfgllmqjdsf", "shtngxtz", "bpwqaqqkqc", "lfbrph", "stegcuvzsbgon", "oiyhcjmhrcffpp", "fmqqxv", "hipmopxn", "aihknsadvenpmz", "vvzqvohgupxn", "wtiqshjzup", "nozkbktkeq", "ptphnb", "hbcpodw", "igtlrrgrm", "agqrwndlbxnw", "stkpsrmikvrjs", "wehraltyagisl", "xfbpenwzjl", "ejwtwvhqo", "oyfocihgzr", "msuzcuoupadhet", "tmrsqwjjy", "kxzbenseroqiklxunr", "kwfvsuwkjvulwsis", "xvfxsbwwvowuvz", "khvdiwdyj", "grsdlm", "vnxtcgtq", "vbghhlxqun", "nomuomun", "qaugehlurhicn", "khqqeyvqrfliisv", "zzigbag", "deonregvas", "icxuzmmns", "qfrbkachaxev", "apagisvmw", "xcfvyzprxf", "lzfqjvkvav", "jatgorouylfwlp", "aedzjxcqod", "nziwxy", "wpurcse", "zfmjkwgutbr", "mgsswzckvr", "cpzxfjovwrgb", "fudafmreofw", "fdaqaewpb", "smgjpfsirj", "ksjmugfq", "cbjxrccv", "hnvaztmcd", "iksrlmrixsm", "vvlgetvqsv", "nxvacp", "oqdpiolpdkxm", "frmxpxnk", "nkikihqv", "keounok", "rwgsektilaw", "shkpxftbp", "dxzubyuvh", "emxzwcfzjnhoeo", "hhkvhtelwixv", "dsxqrtcc", "katkwzquyryu", "cffbvbaxcqs", "himofdn", "nkokikil", "advopfsd", "zfteiqw", "dcpdfkseuvniu", "dmrvtyoiym", "monduyfbycl", "tihcaclbuoupjaml", "kfokijlmbaf", "kqtepmpda", "xmljudnkczz", "rlqhyzyhnekrxof", "oamgeycyutr", "lusuilhhgr", "fcsyioodhi", "dqrlkgclxd", "sccpbofjwhe", "taaqec", "ndtvxkas", "ayzvzbu", "hfvwlsnwxor", "tdbbsjuqaqlvv", "jvvshvdsik", "pphaiprcmtq", "jyxhydhvboylx", "nxktlszttt", "zqbxmtktert", "lqauynoeklbt", "hggtpwtbyua", "wmzoozlehlef", "kmsxsng", "jgpbffvhzrxw", "xbedqptawzrpb", "qkjiyxnh", "jwxtcubbfutunb", "cdrrlrhjnvylu", "aagzvulagi", "botsrubrhrw", "jqqsiedqxc", "xzfgnpaad", "zrqwlrsqqan", "vvugimoe", "dgismprdow", "ltegmfbm", "bqvzwcjwjwjbe", "scizihdgy", "xxeomeqejk", "kjmbntrkjlmh", "xmmzmjtm", "fdpkgnuqiuhiix", "kkmabnklxes", "hqbbzlshixlxc", "weqahewaijbeaplvf", "uvqffkdbedq", "wndacdifw", "dorxocwguvb", "lurauool", "cwgtknjltr", "dvkhewwfnxh", "igwkpzdnlnnz", "tjftwuusaznayrpjw", "fmwajg", "owteyp", "whtpdjels", "bdnjfofsmm", "iqehctqykmw", "ocuthy", "eyzccnwxa"]

let arr=["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"]

function longestConsec(strarr, k) {
    if(k===0||k>strarr.length||k<=0) return'';

    let word=''
    for(let i=0; i<=strarr.length-1; i++){
        currentString= strarr.slice(i,i+k).join('');
        if(currentString.length>word.length){
            word=currentString
        }
    }

    return word

}

console.log(longestConsec(arr,73))


