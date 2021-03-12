function alternatingSums(a) {
    let result = [0,0]
    for(let i = 0; i < a.length; i++){
        result[i % 2] += a[i]
    }
    return result
}
