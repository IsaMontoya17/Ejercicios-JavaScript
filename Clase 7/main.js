const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

/*
1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
*/

let punto1 = numero => {
    for(let i=numero+1; i<=numero+10; i++){
        console.log(i)
    }
}

let numero1 = parseInt(prompt("Ingrese un número para el punto 1: "))
punto1(numero1)

let punto2 = () => {
    for(let i=5; i<=20; i+=3){
        console.log(i)
    }
}

console.log("números entre el 5 y el 20, saltando de tres en tres: ")
punto2()

let punto3 = () => {
    let i=0
    let cont=0
    while(i<100){
        cont++
        i++
    }
    console.log(cont)
}

console.log("sumatoria de todos los números entre el 0 y el 100: ")
punto3()

let punto4 = (numero4) => {
    if(numero4==1){
        return 1
    }else{
        return numero4*punto4(numero4-1)
    }
}

let numero4 = parseInt(prompt("Ingrese un número para mostrar su factorial: "))
const resultado = punto4(numero4)
console.log(`El factorial de ${numero4} es ${resultado}`);

let punto5 = (numero5) => {
    let a = 0;
    let b = 1;
    let string = a;

    for (let i = 1; i < numero5; i++) {
        string += " " + b;
        let temp = a;
        a = b;
        b = temp + b;
    }

    console.log(string);
}

let numero5 = parseInt(prompt("Ingrese un número para mostrar la serie de Fibonacci: "));
punto5(numero5);
