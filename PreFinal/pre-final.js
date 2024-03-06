const prompt = require("prompt-sync")({ sigint: true });

//Isabela Montoya Alarcón

/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.
2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

function diagonalPrincipal(matriz) {
  let suma = 0;
  const n = matriz.length;
  for (let i = 0; i < n; i++) {
    suma += matriz[i][i];
  }
  return suma;
}

function numPares(mat){
  let nuevoArray =[]
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      mat[i][j]%2===0 ? nuevoArray.push(mat[i][j]) : ""
    }
    
  }
  return nuevoArray
}

console.log("Suma diagonal principal: " + diagonalPrincipal(matriz))
console.log("\nValores pares de la matriz: " + numPares(matriz))


//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 
1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que 
contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
 
Nuestra función deberá retornar: 
 
("Mona Lisa", "La ultima cena", "Maria Magdalena")
 
*/

function filtrarPorCreador(cuadros, artista){
  let nuevoArray =[]
  for (let i = 0; i < cuadros.length; i++) {
      cuadros[i].creador===artista ? nuevoArray.push(cuadros[i].nombre) : ""
  }
  return nuevoArray
}

let artista = prompt("Ingrese un artista: ")
let array = filtrarPorCreador(cuadros, artista)
console.log("\nLos cuadros realizados por " + artista + " son: " + array)

/* 
//EJERCICIO Nº3
 
Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
 
1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
*/

let prueba = [
  {
    nombre: "El grito",
    creador: "Edvard Munch"
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch"
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch"
  },
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci"
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci"
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci"
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh"
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh"
  }
]

console.log(cuadros)
bubbleSortAscObjeto(cuadros, "creador")
console.log("\nArray ordenado: " + bubbleSortAscObjeto(cuadros, "creador"))

function bubbleSortAscObjeto(arr, propiedad) {
  let ordenado = true
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][propiedad] > arr[j + 1][propiedad]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
        ordenado = false;
      }
    }
  }
  return ordenado==true ? true : arr;

}//CIERRE DEL METODO


/* 
//EJERCICIO Nº4
 
Desarrollar una función para cada uno de las siguientes apartados: 
 
1) Que reciba por parámetro un número entero y retorne su triple.
2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 
 
*/

function triple(numero) {
  return numero * 3;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    console.error("Error: No se puede dividir por 0");
  }
}

const resultadoTriple = triple(4);
console.log("Triple:", resultadoTriple);

const resultadoMultiplicacion = multiplicacion(4, 3);
console.log("Multiplicación:", resultadoMultiplicacion);

const resultadoDivision = division(10, 3);
console.log("División:", resultadoDivision);


/* 
//EJERCICIO Nº5
 
Crear una matriz de 5 x 7.
Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
 */

let mat = generarMatrizNxM(5, 7)
console.table(mat)
console.log(punto5(mat))

function generarMatrizNxM(n, m) {
  let matriz = [];

  for (let i = 0; i < n; i++) {
      let fila = [];
      for (let j = 0; j < m; j++) {
          fila.push(Math.floor(Math.random() * 21));
      }
      matriz.push(fila);
  }

  return matriz;
}

function punto5(mat){
  let sum=0
  for (let i = 0; i < mat[0].length; i++) {
    sum+=mat[3][i]
  }
  return sum
}

//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos: 

let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24
  },
]

/*
 
1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar 
un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 
 
*/

function filtrarPersonasMayores(personas) {
  return personas.filter(persona => persona.edad > 25);
}

const personasMayoresDe25 = filtrarPersonasMayores(personas);
console.log(personasMayoresDe25);
