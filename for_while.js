//Los ciclos son la forma de crear una accion repetidas veces
//FOR 

let estudiantes = ["juan" ,"daniel", "rosa"];

function saludarEstudiantes (estudiante){
    console.log("hola, " + estudiante);
}
for (let i =0 ; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// otra opcion 
for (estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//WHILE
while(estudiantes.length > 0){
    saludarEstudiantes(estudiantes)
}
