let c=0;
let cp=0;
let p=0;

while(c<1){
    cp=parseInt(prompt("ingrese la cantidad de productos que compró: "));
    p=parseInt(prompt("ingrese el precio del producto:"));
    if(cp<1){
        console.log("ingrese una cantidad valida de productos");
    }
    else if(isNaN(cp)){
        console.log("ingrese una cantidad valida de productos");
    }
    else if(p<1){
        console.log("ingrese un precio valido");
    }
    else if(isNaN(p)){
        console.log("ingrese un precio valido");
    }
    else{
        c=1;
    }
}
let total=cp*p;

if(cp>10 || total>20000){
    total=total*0.85;
    console.log("el total a pagar con descuento es: "+total);
}
else{
    console.log("el total a pagar es: "+total);
}