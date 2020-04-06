function hasObjectPropertyOrCreateThis(property, object) { 
    if (typeof object === 'object' && object !== null){ 
        if (!(property in object)){ 
            object[property] = 'new'; // eslint-disable-line no-param-reassign
        }
    }
    return object; 
} 
module.exports = hasObjectPropertyOrCreateThis; 