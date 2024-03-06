const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

/* 
1) Crear un array llamado misMascotas

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola
*/

let misMascotas = [
  {
    nombre: "Fido",
    raza: "Labrador",
    edad: 10,
    sonido: "Guau",
    sonidoDuplicado: function () {
      return this.sonido + this.sonido;
    }
  },
  {
    nombre: "Mia",
    raza: "Siamés",
    edad: 2,
    sonido: "Miau",
    sonidoDuplicado: function () {
      return this.sonido + this.sonido;
    }
  },
  {
    nombre: "Rocky",
    raza: "Bulldog",
    edad: 12,
    sonido: "Grrr",
    sonidoDuplicado: function () {
      return this.sonido + this.sonido;
    }
  },
  {
    nombre: "Whiskers",
    raza: "Persa",
    edad: 7,
    sonido: "Purr",
    sonidoDuplicado: function () {
      return this.sonido + this.sonido;
    }
  }
];

console.log("\n" + "   Punto 2: ")
console.log(misMascotas[0].sonidoDuplicado());
console.log(misMascotas[1].sonidoDuplicado());
console.log(misMascotas[2].sonidoDuplicado());
console.log(misMascotas[3].sonidoDuplicado());

//3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

let i

function aumentarEdad(misMascotas) {
  for (i = 0; i < misMascotas.length; i++) {
    misMascotas[i].edad++
  }
}

aumentarEdad(misMascotas)
console.log("\n" + "   Punto 3: ")
console.log(misMascotas)

/*
4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/

function aumentarEdad2(misMascotas) {
  for (i = 0; i < misMascotas.length; i++) {
    if (misMascotas[i].edad < 6) {
      misMascotas[i].edad++
    } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10) {
      misMascotas[i].edad += 2
    } else if (misMascotas[i].edad > 10) {
      misMascotas[i].edad += misMascotas[i].edad / 2
    }
  }
}

aumentarEdad2(misMascotas)
console.log("\n" + "   Punto 4: ")
console.log(misMascotas)

//5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

function generadorID(misMascotas) {
  for (i = 0; i < misMascotas.length; i++) {
    misMascotas[i].id = i + 1
  }
}

generadorID(misMascotas)
console.log("\n" + "   Punto 5: ")
console.log(misMascotas)

//Consecutivos similares
let string = prompt("Ingrese un string: ")

function consecutivosSimilares(string) {
  let cont = 0
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      cont++
    }
  }
  return cont
}

console.log("\n" + "Consecutivos similares: ")
console.log(consecutivosSimilares(string))

//Rotación de arreglo a la derecha
let numeros = [1, 2, 3, 4, 5, 6, 7]
let num = parseInt(prompt("Ingrese un numero: "))

function rotar(numeros, num){
  let nuevoArreglo = []
  for (i = numeros.length-num; i < numeros.length; i++) {
    nuevoArreglo.push(numeros[i])
  }
  for (i = 0; i < numeros.length-num; i++) {
    nuevoArreglo.push(numeros[i])
  }  
  return nuevoArreglo
}

console.log("\n" + "Rotación de arreglo a la derecha: ")
console.log(rotar(numeros, num))