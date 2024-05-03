let c=0;
while(c<1){
    let n=parseInt(prompt("ingrese un numero"));
    tipo=typeof n;
    if(tipo=="number"){
        if(n%2==0){
            console.log("el numero es par");
            c=1;
        }else if(n%2==1){
            console.log("el numero es impar");
            c=1;
        }
    }
    else if(tipo==isNaN){
        console.log("el numero no es un numero");
    }
}


