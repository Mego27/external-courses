function reverseString(string){ 
    let newString = "";
    for (let i = 1; i <= string.length; i++){
        newString += string[string.length-i];
    }
    return newString;
}
module.exports = reverseString;