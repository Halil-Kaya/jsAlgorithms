//BENİM KODUM SADECE TEK BİR ŞARTI SAĞLAMIYOR ONU BULAMADIM TESTLERİ AÇACAK COİNİM YOK
function areSimilar(a, b) {

    if(a.length !== b.length){
        return false
    }
    let hak = 1
    for(let i = 0;i < a.length; i++){

        if(a[i] !== b[i]){

            if(hak == 0){
                return false
            }

            hak--

            let index = b.indexOf(a[i])
            let tmp = b[index]
            b[index] = b[i]
            b[i] = tmp
        }

    }

    return true
}