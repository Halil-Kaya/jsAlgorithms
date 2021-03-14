function arrayMaximalAdjacentDifference(inputArray) {

    let result = 0

    inputArray.reduce( (pre,curr,index) => {
        
        if(index == 0){
            return curr
        }

        pre = Math.abs(curr - pre)

        if(pre > result){
            result = pre
        }

        return curr
    },0)
    
    return result
}
