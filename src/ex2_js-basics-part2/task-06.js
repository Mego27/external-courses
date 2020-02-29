function isPrimaryNumber(numb){
    if (numb<1000 && numb>=0 && typeof numb === 'number'){
        if(numb===0){
            return "Это нуль";
        }
        if(numb===1){
            return "Это единица";
        }
        for(let i = 2; i <= Math.sqrt(numb); i++){
            if(numb%i === 0){
                return `Число ${numb} - составное число`;
            } 
        }
        return `Число ${numb} - простое число`; 
    }
    return "Данные неверны";
}
module.exports = isPrimaryNumber