function checkPalindrome(inputString) {
    let metninUzunlugu = inputString.length
    let sonuc = true
    for(let i = 0 ; i < metninUzunlugu; i++){
        if(inputString[metninUzunlugu - i - 1] != inputString[i]){
            sonuc = false
        }
    }
    return sonuc    
}
