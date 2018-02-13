function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}