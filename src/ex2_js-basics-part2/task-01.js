function checkTypeVariable(variable){
    let result = '';
    switch (typeof(variable)){
        case 'string':
            result = 'string';
            break;
        case 'number':
            if (isNaN(variable)){
                result = undefined;
            }
            else result = 'number';
            break;
        default:
            result = undefined;
            break;
    }
    return result;
}
module.exports = checkTypeVariable