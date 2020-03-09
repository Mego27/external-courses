function makeLowerCamelCaseString(string){ 
    let newString ="";
    if (string !== "" && string.trim()!== ""){ 
        let arrayOfWords = string.trim().split(" ");
        newString = arrayOfWords[0][0].toLowerCase() 
        + arrayOfWords[0].slice(1, arrayOfWords[0].length).toLowerCase() ;
        for (let i = 1; i < arrayOfWords.length; i++){
            if (arrayOfWords[i] !== ""){
                newString = newString + arrayOfWords[i][0].toUpperCase() 
                + arrayOfWords[i].slice(1, arrayOfWords[i].length).toLowerCase() ;
            }
        }
    }
    return newString;
}
module.exports = makeLowerCamelCaseString;