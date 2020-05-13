function hasEvery(array, callbackFunction){
    for (let i = 0; i < array.length; i++){
        if (!(callbackFunction(array[i], i, array))){
            return false;
        }
    }
    return true;
}
module.exports = hasEvery;