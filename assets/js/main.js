const mensajes = [
    "Ganaste!",
    "Perdiste!",
    "Empate"
];

let contadorUsuario = 0;
let contadorPc = 0;
let inicio = false;

function aleatorio(min, max){ 
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

function actualizarContadores() {
    document.getElementById("puntos_u").innerHTML = contadorUsuario;
    document.getElementById("puntos_pc").innerHTML = contadorPc;
}    

function eleccion(opcionUsuariobtn) { 
    if(!inicio)
        return;

    const opcionPC = aleatorio(0,2);
    const resultadoImg = ["<i class='fa-solid fa-hand-fist fa-5x'></i>", "<i class='fa-solid fa-hand-sparkles fa-5x'></i>", "<i class='fa-solid fa-hand-scissors fa-5x'></i>"];;

    document.getElementById("eleccion_u").innerHTML = resultadoImg[opcionUsuariobtn];
    document.getElementById("eleccion_pc").innerHTML = resultadoImg[opcionPC];

    let resultado;

    if (opcionUsuariobtn === opcionPC) {
        resultado = 2; // Empate
    } else if ((opcionUsuariobtn === 0 && opcionPC === 2) ||
                (opcionUsuariobtn === 1 && opcionPC === 0) ||
                (opcionUsuariobtn === 2 && opcionPC === 1)) {
        resultado = 0; 
        contadorUsuario++;
    } else {
        resultado = 1; 
        contadorPc++;
    }

    alert(mensajes[resultado]);
    actualizarContadores(); 
}

// Asignar eventos a los botones
document.getElementById("btn-inicio").addEventListener('click', () =>{
    inicio = true;
    console.log("inicio")
});

document.getElementById("piedraOp").addEventListener("click", () => {
    eleccion(0);
});
document.getElementById("papelOp").addEventListener("click", () => {
    eleccion(1);
});
document.getElementById("tijeraOp").addEventListener("click", () => {
    eleccion(2);
});
