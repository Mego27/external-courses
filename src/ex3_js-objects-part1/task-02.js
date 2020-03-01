function outputPropertiesObject(object) {
    if (typeof object === 'object' && object !== null){ 
        for (let key in object) { // eslint-disable-line guard-for-in
            console.log(`В свойстве '${key}' хранится значение '${object[key]}'`);
        }
    }
    else {
        console.log("Это не объект!");
    }
    return;
}
module.exports = outputPropertiesObject;