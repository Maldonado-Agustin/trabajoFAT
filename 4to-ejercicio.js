let parametro1 = 8
let parametro2 = 4
let parametro3 = "mundos"
function paresImpares(parametro1,parametro2,parametro3){
    for(i = 0; i<=parametro1; i++){
        if(i%2 === 0 || i === 0){
            if(i % parametro2 === 0){
                console.log(parametro3)   
            }else{
                console.log(i)
            }

        }
    }
    console.log("---------------------------------------------------")
    for(j = 0; j<=parametro1; j++){ 
        console.log(j)
    }
}

let print1 = paresImpares(parametro1,parametro2,parametro3)
console.log(print1)