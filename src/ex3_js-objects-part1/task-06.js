function deepCopyObject(object) {
    let newObject = {}; 
    for (let key in object){
        if (typeof object === 'object' && object !== null){
            newObject[key] = deepCopyObject(object[key]);
        }
        else{
            newObject[key] = object[key];
        }
    }
    return newObject;
}
module.exports = deepCopyObject;