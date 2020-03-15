function showPropertiesObject(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)){
            console.log(`В свойстве '${key}' хранится значение '${object[key]}'`);
        }
    }
    return;
}
module.exports = showPropertiesObject;