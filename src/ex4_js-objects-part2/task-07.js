function cutSpecificString(string, countSymbols){ 
    let newString = string;
    if (string.length > countSymbols){
        newString = string.slice(0, countSymbols-1) + "\u2026";
    }
    return newString;
}
module.exports = cutSpecificString;