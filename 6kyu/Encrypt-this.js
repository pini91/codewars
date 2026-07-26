// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


function encryptThis(text){
     if (!text) return text;
    return text.split(" ").map(word => {
        if (word.length === 1) return String(word.charCodeAt(0));
        if (word.length === 2) return String(word.charCodeAt(0)) + word[1];
        let second = word[1];
        let last = word[word.length - 1];
        return word.charCodeAt(0) + last + word.slice(2, -1) + second;
    }).join(" ");

}

console.log(encryptThis("hello world"))