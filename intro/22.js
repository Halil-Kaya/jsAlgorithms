function avoidObstacles(inputArray) {

    inputArray = inputArray.sort((a,b) => a-b)

    for(let i = 2 ; i < inputArray[inputArray.length - 1]; i++){
     
        if(!inputArray.includes(i)){
            
            let result = true
            let tmp = i
            while(tmp <= inputArray[inputArray.length - 1]){
                if(!inputArray.includes(tmp)){
                    tmp += i
                }else{
                    result = false
                    break
                }

            }

            if(result){
                return i
            }

        }
        
    }

    return inputArray[inputArray.length - 1] + 1
}
