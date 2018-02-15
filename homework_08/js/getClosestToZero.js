function getClosestToZero() {
    let closest = Math.abs(arguments[0]);
    for (let element of arguments) {
        if (Math.abs(element) < closest) {
            closest = element;
        }
    }
    return closest;
}