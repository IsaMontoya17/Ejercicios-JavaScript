const prompt = require("prompt-sync")({ sigint: true });

let paracaidas = (velocidad, altura) => {
    if(velocidad<1000 && (altura>=2000 && altura<3000)){
        return "Abre el paracaidas"
    }
    else{
        return "No se puede abrir el paracaidas"
    }
}

let velocidad = parseInt(prompt("Ingrese la velocidad: "))
let altura = parseInt(prompt("Ingrese la altura: "))

console.log(paracaidas(velocidad, altura))