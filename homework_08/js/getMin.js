function getMin() {
    let min = arguments[0];
    for (let element of arguments) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}