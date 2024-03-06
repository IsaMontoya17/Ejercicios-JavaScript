const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

const edades = [33, 27, 34, 30, 34, 25];

console.log("De forma ascendente: " + bubbleSortAsc(edades))
console.log("\nDe forma descendente: " + bubbleSortDesc(edades))

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

console.log("\nDe forma ascendente: " + bubbleSortAsc(letras))

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

    bubbleSortAscObjeto(arrayCuentas, "saldo");
    console.log("\nDe forma ascendente según el saldo: " + JSON.stringify(arrayCuentas, null, 2));

    bubbleSortAscObjeto(arrayCuentas, "edadTitular");
    console.log("\nDe forma ascendente según la edad: " + JSON.stringify(arrayCuentas, null, 2));



function bubbleSortAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let aux
            if (arr[j] > arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr

}//CIERRE DEL METODO

function bubbleSortDesc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let aux
            if (arr[j] < arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr

}//CIERRE DEL METODO

function bubbleSortAscObjeto(arr, propiedad) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let aux;
            if (arr[j][propiedad] > arr[j + 1][propiedad]) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;

}//CIERRE DEL METODO