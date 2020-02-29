function outputAndCountElementsOfArray(array){
    for (let i = 0;i < array.length; i++){
        console.log(array[i]);
    }
    return console.log("Общее кол-во элементов: "+ array.length);
}
module.exports = outputAndCountElementsOfArray