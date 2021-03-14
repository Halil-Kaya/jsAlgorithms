function palindromeRearranging(inputString) {

    let len = inputString.length
    inputString = inputString.split('').sort()
    let counts = []

    while(inputString.length > 0){

        counts.push( inputString.lastIndexOf(inputString[0]) + 1 )
        inputString.splice(0,inputString.lastIndexOf(inputString[0]) + 1 )
    
    }

    if(len % 2 == 0){

        let oddCount = counts.filter((x) => x % 2 == 1).length

        if(oddCount != 0){
            return false
        }

    }

    if(len % 2 == 1){

        let oddCount = counts.filter((x) => x % 2 == 1).length

        if(oddCount != 1){
            return false
        }

    }

    return true

 
}
