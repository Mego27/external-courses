function hasSome(array, callbackFunction){
    for (let i = 0; i < array.length; i++){
        if (callbackFunction(item, i, array)){
            return true;
        }
    }
    return false;
}
module.exports = hasSome;