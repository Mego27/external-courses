function searchPropertyObjectPrototype(property, object){
    if (Object.getPrototypeOf(object).hasOwnProperty(property)){
        return (Object.getPrototypeOf(object)[property]);
    }
    return undefined;
}
module.exports = searchPropertyObjectPrototype;