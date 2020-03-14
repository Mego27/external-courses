const Calculator = {
    result: 0,
    getResult: function (){
        return Calculator.result;
    },
    reset: function (){
        Calculator.result = 0;
        return Calculator.result;
    },
    add: function (number = 0){
        Calculator.result += number;
        return Calculator.add;
    },
    subtract: function (number = 0){
        Calculator.result -= number;
        return Calculator.subtract;
    },
    divide: function (number = 1){
        Calculator.result /= number;
        return Calculator.divide;
    },
    multiply: function (number = 1){
        Calculator.result *= number;
        return Calculator.multiply;
    }
}
module.exports = Calculator;