function countOddEvenZeroArray(array){
    let arrayCounters = new Array(3).fill(0);// четные / нечетные / нули
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && !isNaN(array[i])){
            if (array[i]%2===1){
                 arrayCounters[1]++;
            }
            else{
                if (array[i]/2!==0){
                    arrayCounters[0]++;
                }
                else arrayCounters[2]++;
            }
        }
    }
    return arrayCounters;
}
module.exports = countOddEvenZeroArray