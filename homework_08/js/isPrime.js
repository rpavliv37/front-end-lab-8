let isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
            continue;
        }
        return false;
    }
    return n > 1;
}