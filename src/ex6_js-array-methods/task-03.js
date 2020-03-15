function hasEvery(array, callbackFunction){
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        if (!(callbackFunction(item, i, array))){
            return false;
        }
    }
    return true;
}
module.exports = hasEvery;