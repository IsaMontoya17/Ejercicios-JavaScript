const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

//punto 1 y 2
let num1 = parseInt(prompt("Ingrese el numero de filas: "))
let num2 = parseInt(prompt("Ingrese el numero de columnas: "))
let inicio = parseInt(prompt("Ingrese el valor con el que quiere que inicie la matriz: "))


let mat = generarMatrizNxM(num1, num2, inicio)
console.table(mat)

function generarMatrizNxM(n, m, x) {

    let matriz = []
    let val = x

    for (let i = 0; i < n; i++) {
        let fila = []
        for (let j = 0; j < m; j++) {
            fila.push(val)
            val++
        }
        matriz.push(fila)
    }

    return matriz

}

//Punto 3



console.log(diagonalPrincipal(mat))

function diagonalSecundaria(matriz){
    let suma = 0;
    const n = matriz[0].length;
    for (let i = matriz.length-1; i >=0; i--) {
        suma += matriz[i][n - 1 - i];
    }
    return suma;
}

console.log(diagonalSecundaria(mat))
