let palabra1 = "hola"
let longitud = 0
function middleCharacter(palabra1,longitud){
    if (palabra1.length % 2 === 0){
        longitud = (palabra1.length + 1) / 2
        return(palabra1.slice(longitud -1 , longitud +1 ))
    } else {
        longitud = (palabra.length) /2
        return(palabra1.slice(longitud , longitud +1 ))
    }
}

let print= middleCharacter(palabra1,longitud)
console.log(print)