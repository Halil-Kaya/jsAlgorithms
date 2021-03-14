function isIPv4Address(inputString) {

    let splited = inputString.split('.')
    if(splited.length != 4){
        return false
    }
    return splited.reduce((pre,curr) => {

        if(curr.length > 1 && curr[0] == '0'){
            return false
        }

        curr = curr || -1
        if(curr < 256 && curr >= 0){
            return pre
        }
        return false
    },true)
}
