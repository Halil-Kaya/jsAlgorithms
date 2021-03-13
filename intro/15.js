function addBorder(picture) {

    let len = picture[0].length

    let str = "**"

    for(let i = 0; i< len; i++){

        str = str + "*"

    }

    console.log(str)

    picture.forEach((item,index) => {
        
        picture[index] = "*" + item + "*"

    })

    picture.push(str)
    picture.unshift(str)

    return picture
}
