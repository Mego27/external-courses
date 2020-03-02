function outputPropertiesObject(object) {
    if (typeof object === 'object' && object !== null){ 
        for (let key in object) {
            if (object.hasOwnProperty(key)){
                console.log(`В свойстве '${key}' хранится значение '${object[key]}'`);
            }
        }
    }
    else {
        console.log("Это не объект!");
    }
    return;
}
module.exports = outputPropertiesObject;