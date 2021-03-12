function allLongestStrings(inputArray) {

    let maxLength = inputArray[0].length
    inputArray.forEach( (item) => {
    
        if(item.length > maxLength){
            maxLength = item.length
        }

    })

    let result = inputArray.filter(item => {
        
        if(item.length == maxLength){
            return item
        }
    })


    return result
}