function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item) => {
        if(item == elemToReplace) item = substitutionElem
        return item
    })
}
