function isLucky(n) {

    n = n + ""

    let len = n.length/2

    let leftSideString = n.substring(0,len)
    let rightSideString = n.substring(len)

    let leftSideValue = 0;
    let rightSideValue = 0;


    for(let i = 0 ; i < len ; i++){
        
        leftSideValue += parseInt(leftSideString[i])
        rightSideValue += parseInt(rightSideString[i])

    }  


    if(leftSideValue == rightSideValue){
        return true
    }

    return false
}
