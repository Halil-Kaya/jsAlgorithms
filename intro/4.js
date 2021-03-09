function adjacentElementsProduct(inputArray) {
    let result = inputArray[0] * inputArray[1]
    for(let i = 0 ; i < inputArray.length - 1 ; i++){
        let tmpResult = inputArray[i] * inputArray[i + 1]
        if(tmpResult > result){
            result = tmpResult
        }
    }
    return result
}
