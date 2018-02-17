function getClosestToZero() {
    let closest = arguments[0];
    for (let element of arguments) {
        if (Math.abs(element) < Math.abs(closest)) {
            closest = element;
        }
    }
    return closest;
}