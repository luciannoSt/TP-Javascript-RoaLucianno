let n=parseInt(prompt("ingrese un numero"));

switch (n) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("ingrese un numero entre 1 y 7");
        break;
}