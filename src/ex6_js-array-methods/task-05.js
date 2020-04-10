function createArrayByCallback(array, callbackFunction){
    let result = new Array();
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        result.push(callbackFunction(item, i, array));
    }
    return result;
}
module.exports = newArrayBasedOnCallbackFunction;