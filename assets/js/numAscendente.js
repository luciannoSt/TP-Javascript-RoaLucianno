let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese el segundo numero"));
let num3=parseInt(prompt("ingrese el tercer numero"));
let temp1, temp2;
if (num1 > num2 && num1>num3) {
        if(num2>num3){
            console.log(num3,num2,num1);
        }else{
            console.log(num2,num3,num1);
        }
}else if(num2>num1 && num2>num3){
        if(num1>num3){
            console.log(num3,num1,num2);
        }else{
            console.log(num1,num3,num2);
        }
}else if(num3>num1 && num3>num1){
        if(num2>num1){
            console.log(num1,num2,num3);
        }else{
            console.log(num2,num1,num3);
        }
}else if(num1==num2 && num3==num1){
        console.log("numeros iguales:");
}
