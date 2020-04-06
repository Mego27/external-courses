function countSymbolsInString(string){ 
    let copyString;
    let arrayOfMetSymbols = [];
    for (let i = 0; i < string.length; i++){
        if (!(arrayOfMetSymbols.includes(string[i]))){
            copyString = string;
            while (copyString.includes(string[i])){
                copyString = copyString.replace(string[i],"");
            }
            arrayOfMetSymbols.push(string[i]);
            console.log(`Символ '${string[i]}' встречается в строке ${string.length - copyString.length} раз`)
        }
    }
}
module.exports = countSymbolsInString;