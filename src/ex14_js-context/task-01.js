const Calculator = {
    result: 0,
    getResult: function (){
        return this.result;
    },
    setState: function(number) {
        if (number) {
            this.result = number;
        }
        return this;
    },
    reset: function (){
        this.result = 0;
        return this;
    },
    add: function (number = 0){
        this.result += number;
        return this;
    },
    subtract: function (number = 0){
        this.result -= number;
        return this;
    },
    divide: function (number = 1){
        this.result /= number;
        return this;
    },
    multiply: function (number = 1){
        this.result *= number;
        return this;
    },
    fetchData: function (callback) {
        setTimeout(callback, 2000, this.result = 500);
        return this;
    }
}
module.exports = Calculator;