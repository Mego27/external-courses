function isPrimaryNumber(number){
    if (number<1000 && number>=0 && typeof number === 'number'){
        if(number===0){
            return "Это нуль";
        }
        if(number===1){
            return "Это единица";
        }
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number%i === 0){
                return `Число ${number} - составное число`;
            } 
        }
        return `Число ${number} - простое число`; 
    }
    return "Данные неверны";
}
module.exports = isPrimaryNumber