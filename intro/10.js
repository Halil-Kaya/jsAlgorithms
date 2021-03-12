function commonCharacterCount(s1, s2) {

    let result = 0

    for(let i = 0 ; i< s1.length; i++){

        if(s2.includes(s1[i])){

            result++

            s2 = s2.replace(s1[i],'')

        }

    }

    return result    
}