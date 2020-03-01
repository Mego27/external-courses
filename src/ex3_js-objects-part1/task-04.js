function hasObjectPropertyOrCreateThis(property, object) {
    if (typeof object === 'object' && object !== null){
        if (!(property in object)){
            object[property] = 'new';
        }
    }
    return object;
}
module.exports = hasObjectPropertyOrCreateThis;