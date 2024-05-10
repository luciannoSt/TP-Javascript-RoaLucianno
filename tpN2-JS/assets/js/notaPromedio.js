let c=0;
let n1=parseInt(prompt("ingrese la primera nota: "));

let n2=parseInt(prompt("ingrese la segunda nota: "));

let n3=parseInt(prompt("ingrese la tercera nota: "));

while(c<1){
    if(n1<1 || n1>10){
        console.log("ingrese una nota valida");
        n1=parseInt(prompt("ingrese la primera nota: "));
    }
    else if(n2<1 || n2>10){
        console.log("ingrese una nota valida");
        n2=parseInt(prompt("ingrese la segunda nota: "));
    }
    else if(n3<1 || n3>10){
        console.log("ingrese una nota valida");
        n3=parseInt(prompt("ingrese la tercera nota: "));
    }
    else if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
        console.log("ingrese una nota valida");
        n1=parseInt(prompt("ingrese la primera nota: "));
        n2=parseInt(prompt("ingrese la segunda nota: "));
        n3=parseInt(prompt("ingrese la tercera nota: "));
    } 
    else{
        c=1;
    }
}

let promedio=(n1+n2+n3)/3;
let valor=0;
if(promedio>=1 && promedio<=3){
    valor=1;
}
else if(promedio>=4 && promedio<=5){
    valor=2;
}
else if(promedio>=6 && promedio <=7){
    valor=3;
}
else if(promedio>=8 && promedio <=9){
    valor=4;
}
else if(promedio==10){
    valor=5;
}


switch(valor){
    case 1:
        console.log("Nota insuficiente");
        break;
    case 2:
        console.log("Nota regular");
        break;
    case 3:
        console.log("Nota buena");
        break;
    case 4:
        console.log("Nota muy buena");
        break;
    case 5:
        console.log("Nota sobresaliente");
        break;
}
