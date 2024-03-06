//Isabela Montoya Alarcón

//Ejercicio 1
let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372000
    },

    {
        nombre: "Brasil",
        continente: "Sudamérica",
        poblacion: 300000000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000000
    }
];

const nuevoArreglo = paisesContiente(paises, "Sudamérica", 300000000);
console.log(nuevoArreglo)

function paisesContiente(arr, continente, num) {
    return arr.filter(pais => pais.continente === continente && pais.poblacion >= num);
}

//Ejercicio 2
let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

console.log(arrayDeNumeros)
console.log(bubbleSort(arrayDeNumeros, "DESC"))

function bubbleSort(arr, string) {
    let s = string.toUpperCase()
    if (s === "ASC" || s === "DESC") {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                let aux
                if (s === "ASC") {
                    if (arr[j] > arr[j + 1]) {
                        aux = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = aux
                    }
                } else {
                    if (arr[j] < arr[j + 1]) {
                        aux = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = aux
                    }
                }
            }
        }
    }
    else {
        console.error("String ingresado no válido")
    }
    return arr
}

//Ejercicio 3
let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

console.log(sumaFila(matriz))
console.log(pares(matriz))

function sumaFila(mat) {
    return mat[1].reduce((sum, num) => sum + num, 0);
}

function pares(mat) {
    const nuevoArreglo = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            mat[i][j] % 2 === 0 ? nuevoArreglo.push(mat[i][j]) : ""
        }

    }
    return nuevoArreglo
}