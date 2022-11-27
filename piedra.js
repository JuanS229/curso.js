// Uso de if
let jugador
let cpu 

function juego (cpu,jugador) {
    if (cpu == jugador){
        console.log("empate");
    } else if (cpu == "tijeras" && jugador == "papel" || cpu == "papel" && juagdor == "piedra" || cpu =="piedra" && jugador =="tijeras"){
        consolej.log("perdiste");
    } else if (cpu == "tijeras" && jugador == "piedra" || cpu == "papel" && juagdor == "tijera" || cpu =="piedra" && jugador =="papel") {
        console.log("ganaste")
    } else {
        console.log("Elije un valor que sea valido")
    }
}

    //inicializar funcion
    juego (cpu.jugador);

//Uso de switch

let player;
let machine;

function playground (player, machine){

switch (true) {
        case player == machine:
            console.log("empate");
            break;
        case machine == "tijeras" && player == "papel" || machine == "papel" && player == "piedra" || machine =="piedra" && player =="tijeras":
            console.log("perdiste");
            break;
        case machine == "tijeras" && player == "piedra" || machine == "papel" && player == "tijera" || machine =="piedra" && player =="papel":
            console.log("ganaste");
            break;
        default:
            console.log("ingresa un valor valido");
            break;
    }
}

// otras opciones de ciclos cuando solo hay dos casos podibles 

let colors= ["green","red","blue"]

function verfyColor(colors) {
    return (colors[0]=== 'green' ? true : false)
}
