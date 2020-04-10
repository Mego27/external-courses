function arrayClipping(array, startPosition = 0, endPosition = array.length){
    let newArray = new Array();
    let begin = startPosition;
    let end = endPosition;
    if (startPosition < 0){
        begin = (array.length) + startPosition;
    }
    if (endPosition < 0){
        end = array.length + endPosition;
    }
    for(let i = begin; i < end; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports = arrayClipping;