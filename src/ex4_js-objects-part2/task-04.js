function changeUpperCaseFirstSymbol(string){ 
  if (string!==""){
    let newString = string.slice(1, string.length);
    newString = string[0].toUpperCase() + newString;
    return newString;
  }  
  return string;
}
module.exports = changeUpperCaseFirstSymbol;