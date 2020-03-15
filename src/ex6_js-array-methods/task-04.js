function newFilteredArray(array, callbackFunction){
    let newArray = new Array();
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        if (callbackFunction(item, i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports = newFilteredArray;