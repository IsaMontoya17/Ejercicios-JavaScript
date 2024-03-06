const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.
console.log("Edades menores a 18:", menorDe(edades, 18));

// Obtener en un nuevo array las edades mayor o igual a 18.
console.log("Edades mayores o iguales a 18:", mayorDe(edades, 18));

// Obtener en un nuevo array las edades igual a 18.
console.log("Edades iguales a 18:", igualA(edades, 18));

// Obtener el menor.
let i
let menor = edades => {
    let menor = 100
    for (i = 0; i < edades.length; i++) {
        if (edades[i] < menor) {
            menor = edades[i];
        }
    }
    return menor
}
//let menor = Math.min(...edades);
console.log("Menor edad:", menor(edades));

// Obtener el mayor.
let mayor = edades => {
    let mayor = 0
    for (i = 0; i < edades.length; i++) {
        if (edades[i] > mayor) {
            mayor = edades[i];
        }
    }
    return mayor
}
//let mayor = Math.max(...edades);
console.log("Mayor edad:", mayor(edades));

// Obtener el promedio de edades.
let promedio = edades => {
    let totalEdades = 0;
    for (let i = 0; i < edades.length; i++) {
        totalEdades += edades[i];
    }
    let promedio = totalEdades / edades.length;
    return promedio
}
console.log("Promedio de edades:", promedio(edades));

// Incrementar en 1 todas las edades.
console.log("Edades incrementadas:", incremento(edades));

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
            estaHabilitada: true,
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

//Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
console.log("Cuenta con titulares con edades menores a 30:", menorDe1(arrayCuentas, 30));


//Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
console.log("Cuenta con titulares con edades mayores o iguales a 30:", mayorDe1(arrayCuentas, 30));


//Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
console.log("Cuenta con titulares con edades iguales a 30:", igualA1(arrayCuentas, 30));


//Obtener la cuenta con el titular de la misma más joven.
const edades2=arrayCuentas.map(cuenta => cuenta.edadTitular)
let cuentaMasJoven = arrayCuentas.find(cuenta => cuenta.edadTitular === Math.min(...edades2))
console.log("Cuenta con el titular de la misma más joven:", cuentaMasJoven)

//Obtener un array con las cuentas habilitadas.
let nuevoArray=[]
for(i=0; i<arrayCuentas.length; i++){
    if(arrayCuentas[i].estaHabilitada === true){
        nuevoArray.push(arrayCuentas[i])
    }
}
console.log("Array con las cuentas habilitadas: " + nuevoArray)


//Obtener un array con las cuentas deshabilitadas.



//Obtener la cuenta con el menor saldo.



//Obtener la cuenta con el mayor saldo.



function menorDe(array, num) {
    let menoresDe = array.filter(edad => edad < num);
    return menoresDe
}
function menorDe1(array, num) {
    let menoresDe = array.filter(edad => edad.edadTitular < num);
    return menoresDe
}

function mayorDe(array, num) {
    let mayoresDe18 = array.filter(edad => edad >= num);
    return mayoresDe18
}
function mayorDe1(array, num) {
    let mayoresDe18 = array.filter(edad => edad.edadTitular >= num);
    return mayoresDe18
}

function igualA(array, num) {
    let igualA = array.filter(edad => edad === num);
    return igualA
}
function igualA1(array, num) {
    let igualA = array.filter(edad => edad.edadTitular <= num);
    return igualA
}

function incremento(edades) {
    let edadesIncrementadas = edades.map(edad => ++edad);
    return edadesIncrementadas
}