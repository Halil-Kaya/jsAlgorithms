//naber abdulsamet :)
function boxBlur(image) {
    let boxBlurResult = []
    for(let i = 0; i < image.length - 2;i++){
        for(let j = 0; j < image[i].length - 2;j++){
            let result = 0
            for(let k = i; k < i + 3;k++){
                for(let l = j; l < j + 3; l++){
                    result += image[k][l]
                }
            }
            result = Math.floor(result/9)
            if(boxBlurResult[i] == undefined){
                boxBlurResult[i] = []
            }
            boxBlurResult[i].push(result)
        }
    }
    return boxBlurResult
}
