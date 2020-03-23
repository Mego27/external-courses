function deleteFirstAndLastSpace(string){
    let newString = string;  
    if (string.startsWith(" ") && string.endsWith(" ")){
        newString = string.slice(1, string.length-1);
    }
    return newString;
}
module.exports = deleteFirstAndLastSpace;