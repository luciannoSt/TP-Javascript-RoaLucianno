let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese el segundo numero"));
let num3=parseInt(prompt("ingrese el tercer numero"));
let temp1, temp2;

// Order the first two numbers
if (num1 > num2) {
  temp1 = num1;
  num1 = num2;
  num2 = temp1;
}

// Check the third number and swap accordingly
if (num3 < num1) {
  temp2 = num3;
  num3 = num1;
  num1 = temp2;
} else if (num3 < num2) {
  temp2 = num3;
  num3 = num2;
  num2 = temp2;
}

console.log("Números ordenados en orden ascendente:");
console.log(num1,num2,num3);