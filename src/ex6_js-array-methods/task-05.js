function newArrayBasedOnCallbackFunction(array, callbackFunction){
    let newArray = new Array();
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        newArray.push(callbackFunction(item, i, array));
    }
    return newArray;
}
module.exports = newArrayBasedOnCallbackFunction;