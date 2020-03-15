function arrayClipping(array, begin = 0, end = array.length){
    let newArray = new Array();
    let beginCopy = begin;
    let endCopy = end;
    if (begin < 0){
        beginCopy = (array.length) + begin;
    }
    if (end < 0){
        endCopy = array.length + end;
    }
    for(let i = beginCopy; i < endCopy; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports = arrayClipping;