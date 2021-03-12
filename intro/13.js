function reverseInParentheses(inputString) {

    while(inputString.includes('(')){

        let start = inputString.indexOf('(')
        let end = 0
        let tmp = 0    
        for(let i = start + 1; i < inputString.length; i++){

            if(inputString[i] == ')' && tmp == 0){
                end = i
                break
            }

            if(inputString[i] == '('){
                tmp++
            }else if(inputString[i] == ')'){
                tmp--
            }

        }


        let targetWord = inputString.substring(start + 1,end)

        let inputStringSplited = inputString.split("")

        inputStringSplited.splice(start,end - start + 1)

        for(let i = 0;i < targetWord.length; i++){

            if(targetWord[i] == '('){

                inputStringSplited.splice(start,0,')')

            }else if(targetWord[i] == ')'){

                inputStringSplited.splice(start,0,'(')

            }else{

                inputStringSplited.splice(start,0,targetWord[i])

            }

        
        }

        inputString = inputStringSplited.join("")

    }

    return inputString
}