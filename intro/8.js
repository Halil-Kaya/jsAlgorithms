function matrixElementsSum(matrix) {
    let result = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++ ){
            if(matrix[i][j] != 0){
                let isThereGhostAbove = false
                for(let k = i - 1; k >= 0; k--){
                    if(matrix[k][j] == 0){
                        isThereGhostAbove = true
                        break
                    }
                }
                if(!isThereGhostAbove){
                    result += matrix[i][j]
                }
            }
        } 
    }
    return result
}