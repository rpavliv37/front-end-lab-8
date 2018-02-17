function predicateFunction(num) {
    return num > 3;
}

function getFilteredArray(array, func) {
    let filteredArray = [];
    forEach(array, function(element) {
        if (func(element)) {
            filteredArray.push(element);
        }
    })
    return filteredArray;
}