function newReduce(array, callback, initialValue){
    let previousValue = array[0];
    let i = 1;
    if (arguments.length > 2){
        previousValue = initialValue;
        i = 0;
    }
    for (i; i < array.length; i++){
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}
module.exports = newReduce;