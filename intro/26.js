function evenDigitsOnly(n) {
    return n.toString().split('').every(x => x % 2 == 0)
}
