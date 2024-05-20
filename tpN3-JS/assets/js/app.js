function agregarTarea(){
    let tarea=prompt("Ingrese la tarea");
    let tareS=tarea.trim();
    if(tareS.length==0){
        alert("La tarea esta vacia");
    }else{
        if(lista.includes(tareS)){
            alert("La tarea ya existe");
        }else{
        lista.push(tareS);
        alert("La tarea se agrego correctamente.");
        }
    }
}
function listarTareas(){
    let tareas="";
    if(lista.length==0){
        alert("No hay tareas, agregue alguna por favor.");
    }else{
        for(let i=0;i<lista.length;i++){
            if(i==lista.length-1){
                tareas+=lista[i]+".";
            }else{
                tareas+=lista[i]+", ";
            }
        }
        alert(tareas);
    }
    
}
function editarTarea(){
    let tarea;
    let nom=prompt("Ingrese el nombre de la tarea a editar: ");
    let nomspace=nom.trim();
    if(nomspace.length==0){
        alert("La tarea esta vacia");
    }else{
        if(lista.includes(nomspace)){
            tarea=prompt("Ingrese el nuevo nombre de tarea: ");
            if(lista.includes(tarea)){
                alert("La tarea ya existe");
            }else{
                lista.splice(lista.indexOf(nomspace),1,tarea);
                alert("la tarea se edito correctamente.")
            }
        }else{
            alert("La tarea no existe");
        }
    }
    
}

function eliminarTarea(){
    let nom=prompt("Ingrese el nombre de la tarea a eliminar: ");
    let nomspace=nom.trim();
    if(lista.includes(nomspace)){
        lista.splice(lista.indexOf(nomspace),1);
        alert("la tarea se eliminó correctamente.")
    }else{
        alert("La tarea no existe");
    }
}

let lista=[];
let opcion;
let c=1;
while(c!=0){
    opcion=parseInt(prompt(`ingrese una de las opciones:
    1)Agregar tarea: 
    2)listar tareas:
    3)editar tareas
    4)eliminar tareas
    5)salir`));
    switch(opcion){
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 5:
            alert("Gracias por usar el programa");
            c=0;
            break;
        default:
            alert("Ingrese una opcion valida");
            break;
    }
}