function getMaxItem(array){
    let maxItem = -Infinity;
    for (let i = 0; i < array.length; i++){
        if (array[i]>maxItem && typeof array[i]==='number'){
            maxItem = array[i];
        }
    }
    return maxItem;
}
module.exports = getMaxItem