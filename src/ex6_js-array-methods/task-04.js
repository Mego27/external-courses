function newFilteredArray(array, callbackFunction){
    let result = new Array();
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        if (callbackFunction(item, i, array)){
            result.push(array[i]);
        }
    }
    return result;
}
module.exports = newFilteredArray;