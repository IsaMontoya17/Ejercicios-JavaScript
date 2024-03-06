const prompt = require("prompt-sync")({ sigint: true });
/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/
let num=parseInt(prompt("Ingrese numero: "))
let lim=parseInt(prompt("Ingrese limite: "))

function encontrarMultiplos(num, lim){
    let arreglo = []
    for(let i=num; i<lim;i+=num){
        arreglo.push(i)
    }
    return arreglo
}
console.log(encontrarMultiplos(num, lim))

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
// Crear arreglo de objetos estudiantes

// Definir un arreglo de estudiantes
/*let estudiantes = [
    {
        nombre: "Estudiante1",
        notas: [85, 90, 78, 92],
        calcularAprobacion: function () {
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            let promedio = suma / this.notas.length;
            this.aprobado = promedio >= 70;
        }
    },
    {
        nombre: "Estudiante2",
        notas: [70, 65, 80, 75],
        calcularAprobacion: function () {
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            let promedio = suma / this.notas.length;
            this.aprobado = promedio >= 70;
        }
    },
    {
        nombre: "Estudiante3",
        notas: [95, 88, 89, 94],
        calcularAprobacion: function () {
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            let promedio = suma / this.notas.length;
            this.aprobado = promedio >= 70;
        }
    },
    {
        nombre: "Estudiante4",
        notas: [60, 72, 68, 74],
        calcularAprobacion: function () {
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            let promedio = suma / this.notas.length;
            this.aprobado = promedio >= 70;
        }
    }
];

// Calcular la aprobación para cada estudiante
estudiantes.forEach(estudiante => estudiante.calcularAprobacion());

// Imprimir el arreglo de estudiantes con la información de aprobación
console.log(estudiantes);
*/

// Definir un arreglo de estudiantes
let estudiantes = [
    {
        nombre: "Estudiante1",
        notas: [85, 90, 78, 92],
        aprobado: false
    },
    {
        nombre: "Estudiante2",
        notas: [70, 65, 80, 75],
        aprobado: false
    },
    {
        nombre: "Estudiante3",
        notas: [95, 88, 89, 94],
        aprobado: false
    },
    {
        nombre: "Estudiante4",
        notas: [60, 72, 68, 74],
        aprobado: false
    }
];

// Llamar a la función calcularAprobacion para cada estudiante
estudiantes.forEach(estudiante => calcularAprobacion(estudiante));
console.log(estudiantes);

function calcularAprobacion(estudiante) {
    let suma = 0;
    for (let i = 0; i < estudiante.notas.length; i++) {
        suma += estudiante.notas[i];
    }
    let promedio = suma / estudiante.notas.length;
    estudiante.aprobado = promedio >= 70;
}
// Función para calcular el promedio de notas

// Función para determinar si el estudiante aprobó

// Calcular si los estudiantes aprobaron o no

// Imprimir estado de aprobación de los estudiantes

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; 
si es posterior o igual a 2010, el impuesto es del 5%.

*/

// Definir el objeto vehiculo
var vehiculo = {
    marca: "Toyota",
    modelo: "Camry",
    anio: 2012,
    precio: 15000,
    calcularImpuesto: function () {
      if (this.anio < 2010) {
        return this.precio * 0.10; // Impuesto del 10% si el año es anterior a 2010
      } else {
        return this.precio * 0.05; // Impuesto del 5% si el año es 2010 o posterior
      }
    }
  };
  
  console.log("Marca: " + vehiculo.marca);
  console.log("Modelo: " + vehiculo.modelo);
  console.log("Año: " + vehiculo.anio);
  console.log("Precio: $" + vehiculo.precio);
  console.log("Impuesto a pagar: $" + vehiculo.calcularImpuesto());
  
