function hasObjectProperty(property, object) {
    if (typeof object === 'object' && object !== null && property in object){
        return true;
    }
    return false;
}
module.exports = hasObjectProperty;