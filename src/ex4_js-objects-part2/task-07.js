function cutSpecificString(string, countSymbols){ 
    let newString;
    if (string.length > countSymbols){
        newString = string.slice(0, countSymbols-1) + "\u2026";
    }
    return newString;
}
module.exports = cutSpecificString;