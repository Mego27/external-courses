function insertSubstringIntoString(string, substring, number){ 
    let newString = "";
    let arrayOfWords = string.trim().split(" ");
    if (substring !== ""){
        for (let i = 0; i < arrayOfWords.length; i++){
            if (i < number) {
                newString += arrayOfWords[i];
            }
            else if (i === number) {
                newString += arrayOfWords[i] + " " + substring;
            }
            else {
                if (i !== arrayOfWords.length){
                    newString += arrayOfWords[i];
                }
            }
            if (i !== arrayOfWords.length-1){ //checking to insert a space at the end of a line
                newString += " ";
            }
        }
    }
    return newString;
}
module.exports = insertSubstringIntoString;