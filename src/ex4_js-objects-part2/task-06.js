function changeUpperCaseAllWords(string){ 
    let newString ="";
    if (string !== ""){ 
        let arrayOfWords = string.split(" ");
        for (let i = 0; i < arrayOfWords.length; i++){
            if (i !== arrayOfWords.length-1){
                if (arrayOfWords[i] !== ""){ //handling of extra spaces
                    newString = newString + arrayOfWords[i][0].toUpperCase() 
                    + arrayOfWords[i].slice(1, arrayOfWords[i].length) + " ";
                }
                else{
                    newString = newString + " ";
                }
            }
            else {
                if(arrayOfWords[i] !== ""){ //handling of extra spaces
                    newString = newString + arrayOfWords[i][0].toUpperCase() 
                    + arrayOfWords[i].slice(1, arrayOfWords[i].length);
                }
            }
        }
    }
    return newString;
}
module.exports = changeUpperCaseFirstSymbol;