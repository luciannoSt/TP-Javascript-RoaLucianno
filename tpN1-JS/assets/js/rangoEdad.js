let c=0;
while(c<1){
    let edad = parseInt(prompt("ingrese su edad "));
    let tipo= typeof edad;
    if(tipo=="number"){
        if (edad>=0 && edad<=12) {
            console.log("es un niño");
            c=1;
        }
        else if(edad>=13 & edad<=19){
            console.log("es un adolescente");
            c=1;
        }
        else if(edad>=20 & edad<=59){
            console.log("es un adulto");
            c=1;
        }
        else if(edad>=60){
            console.log("es un adulto mayor");
            c=1;
        }
    }
    else if(tipo=="string"){
        console.log("ingrese una edad valida");
    }
}
