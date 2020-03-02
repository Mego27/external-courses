function deepCopyObject(object) { 
    let newObject;  
    if (Array.isArray(object)){
        newObject = [];
        for (let i = 0; i < object.length; i++){
            newObject[i] = deepCopyObject(object[i]);
        }
    }
    else if (object instanceof Object){
        newObject = {};
        for (let key in object){ // eslint-disable-line guard-for-in
            newObject[key] = deepCopyObject(object[key]);
        }
    }
    else{
        newObject = object;
    }
    return newObject;
}
module.exports = deepCopyObject;