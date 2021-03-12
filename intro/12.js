function sortByHeight(a) {

    
    for(let i = 0 ; i < a.length; i++){

        if(a[i] == -1){
            continue
        }

        let tmpMin = a[i]
        let tmpIndex = i
        for(let j = i + 1; j < a.length; j++){
            
            if(a[j] == -1){
                continue
            }

            if(a[j] < tmpMin) {
                tmpMin = a[j]
                tmpIndex = j
            }
            

        }

        let tmp = a[tmpIndex]
        a[tmpIndex] = a[i]
        a[i] = tmp

    }

    return a
}
