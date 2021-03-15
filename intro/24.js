function minesweeper(matrix) {

    let sweepers = []
    for(let i = 0; i < matrix.length; i++){
        sweepers.push([])
        for(let j = 0; j < matrix[i].length;j++){
            sweepers[i].push(0)
        }
    }

    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            let count = 0
            for(let m = i - 1; m <= i + 1; m++){
                for(let n = j - 1; n <= j + 1; n++){
                    if(m >= 0 && n >= 0 && m < matrix.length && n < matrix[i].length&&!(m == i && n == j)){
                        if(matrix[m][n] == true){
                            count++
                        }
                    }
                }
            }
            sweepers[i][j] = count
        }
    }
    return sweepers
}
