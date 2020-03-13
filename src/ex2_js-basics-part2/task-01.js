function checkType(variable){
    let result = '';
    if (typeof(variable) === 'string' || (typeof(variable) === 'number' && !Number.isNaN(variable))){
        return typeof(variable);
    }
    return;
}
module.exports = checkType