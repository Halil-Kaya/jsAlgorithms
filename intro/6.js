function makeArrayConsecutive2(statues) {
    let min = Math.min.apply(null,statues)  
    let max = Math.max.apply(null,statues)
    let result = 0
    for(let i = min; i <= max; i++){
        if(!statues.includes(i)){
            result++
        }

    }
    return result
}
