const prompt = require("prompt-sync")({ sigint: true });

//punto 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella" ]
console.log("\nPunto 1: ")
console.log(peliculas.indexOf("pulp fiction"))

//punto 2
let peliculasMayusculas = peliculas => {
    let peliculasEnMayusculas = [];
    for(let i=0; i<peliculas.length; i++){
        peliculasEnMayusculas.push(peliculas[i].toUpperCase())
    }

    return peliculasEnMayusculas
}

let peliculasEnMayusculas = peliculasMayusculas(peliculas)
console.log("\nPunto 2: ")
console.log(peliculasEnMayusculas)


//punto 3
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

//punto 4
let fortnite = peliculas2.pop()

let punto3 = (peliculasEnMayusculas, peliculas2) => {
    let peliculas2Mayusculas = peliculasMayusculas(peliculas2)
    for(let i=0; i<peliculas2Mayusculas.length; i++){
        peliculasEnMayusculas.push(peliculas2Mayusculas[i])
    }
    return peliculasEnMayusculas
}

console.log("\nPunto 3: ")
console.log(punto3(peliculasEnMayusculas, peliculas2))

//punto 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let comparacion = (asiaScores, euroScores) => {
    let iguales = true
    if(asiaScores.length==euroScores.length){
        for(let i=0; i<asiaScores.length && iguales==true; i++){
            if(asiaScores[i]!==euroScores[i]){
                iguales = false
            }
        }
    }else{
        iguales=false
    }
    return iguales
}

console.log("\nPunto 5: ")
console.log(comparacion(asiaScores, euroScores))

//array inverso
let imprimirInverso = peliculas => {
    let nuevoPeliculas = inversor(peliculas);

    for (let i = 0; i < nuevoPeliculas.length; i++) {
        console.log(nuevoPeliculas[i]);
    }
}

function inversor(peliculas) {
    let nuevoPeliculas = [];

    for (let i = peliculas.length - 1; i >= 0; i--) {
        nuevoPeliculas.push(peliculas[i]);
    }

    return nuevoPeliculas;
}

console.log("\nArray inverso:");
imprimirInverso(peliculas);

//suma arrays

let x=0
let numero
let numeros = []
do{
    numero = parseInt(prompt("Ingrese el número " + (x+1) + " : "))
    numeros.push(numero)
    x++
}while(x<3)

function sumaArray(numeros){

    let suma=0
    for(let i=0; i<numeros.length; i++){
        suma +=numeros[i]
    }

    return suma
}

console.log("\nSuma array: " + sumaArray(numeros));

//simulación array.join()

x=0
let char
let elementos = []
do{
    char = prompt("Ingrese una letra: ")
    elementos.push(char)
    x++
}while(x<4)

function join (elementos){

    let string=""
    for(let i=0; i<elementos.length; i++){
        string += elementos[i]
    }

    return string
}

console.log("\nSimulación array.join(): " + join(elementos));

