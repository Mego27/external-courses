function copyObject(object) { 
    let newObject;
    if (typeof object === 'object' && object !== null){ 
        newObject = Object.assign({},object); 
    } 
    return newObject; 
} 
module.exports = copyObject; 