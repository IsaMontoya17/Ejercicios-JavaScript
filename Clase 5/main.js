const prompt = require("prompt-sync")({ sigint: true });
/*
Micro Desafío 1: devuelve y-x, en este caso como x es 10 y y es 40, devolverá 30

Micro Desafío 2: devuelve x*2, en este caso devolverá 20, con las otras 2 lineas que estan despues del primer return supongo que no hacen nada porque estan despues del return
*/

//punto 1: Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
let pulgadas = parseFloat(prompt("Ingrese las pulgadas que quiere convertir a centimetros: "))
let pulgadasCentimetros = pulgadas => pulgadas*2.54;
console.log(pulgadasCentimetros(pulgadas));

//punto 2: Crear una función que recibe un string y lo convierte en una URL.
let string = prompt("Ingrese el string que quiere convertir en URL: ")
let url = string => "http://www." + string + ".com";
console.log(url(string));

//punto 3: Crear una función que recibe un string y devuelve la misma frase pero con admiración.
let string1 = prompt("Ingrese el string que quiere que sea devuelto con admiración: ")
let admiración = string1 => "¡" + string1 + "!";
console.log(admiración(string1));

//punto 4: Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
let añosHumanos = parseFloat(prompt("Ingrese la edad del perro en años humanos: "))
let edadPerro = añosHumanos => añosHumanos*7;
console.log(edadPerro(añosHumanos));

//punto 5: Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.
let sueldoMensual = parseInt(prompt("Ingrese su sueldo mensual: "))
let valorHoraTrabajo = sueldoMensual => sueldoMensual/40;
console.log(valorHoraTrabajo(sueldoMensual));

//punto 6: Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona.
let altura = parseFloat(prompt("Ingrese su altura en metros: "))
let peso = parseFloat(prompt("Ingrese su peso en kg: "))
let calculadorIMC = (altura, peso) => peso/Math.pow(altura, 2);
console.log(calculadorIMC(altura, peso));

//punto 7: Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
let minuscula = prompt("Ingrese una frase: ")
let minusculaMayuscula = minuscula => minuscula.toUpperCase(); //este método convierte el string ingresado en mayuscula, el metodo toLowerCase hace lo contrario
console.log(minusculaMayuscula(minuscula));

//punto 8: Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
let tipoDato = dato => typeof dato;
console.log(tipoDato(1)); 

//punto 9: Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
let radio = parseFloat(prompt("Ingrese el radio: "))
let circunferencia = radio => 2 * Math.PI * radio;
console.log(circunferencia(radio));