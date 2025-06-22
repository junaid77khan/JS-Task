function getAllMethods(obj) {
    let properties = Object.getOwnPropertyNames(obj);

    properties = properties.filter(property => typeof obj[property] === 'function');

    return properties;
}

console.log(getAllMethods(Array));