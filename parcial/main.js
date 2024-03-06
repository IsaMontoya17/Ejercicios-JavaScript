//Isabela Montoya Alarcón

//EJERCICIO 1
function ejercicio1(num1, num2){

    if(num1%2===0 && num2%2===0){
        return num1+num2
    } else if (num1%2===0 || num2%2===0){
        return num1*num2
    }else{
        return "Ninguno es par"
    }
}

console.log("Ejercicio 1: " + ejercicio1(1,1))

//EJERCICIO 2
let ciclista = {
    nombre: "Isa",
    apellido: "Montoya",
    edad: 17,
    tieneBici: true
  };
  
function ejercicio2(ciclista){
    if(ciclista.edad>=18 && ciclista.tieneBici==true){
        return "puede competir"
    } else if(ciclista.edad<18 && ciclista.tieneBici==true){
        return "podrá competir pero con un adulto acompañante"
    } else{
        return "No podrá competir"
    }
}

console.log("\nEjercicio 2: " + ejercicio2(ciclista))

//EJERCICIO 3
let libros = [];

let historiasInconscientes = {
    anio  : 2013,
    autor : "Gabriel Rolón",
    paginas: 352
};

let elAlquimista = {
    anio  : 1988,
    autor : "Paulo Coelho",
    paginas: 192
};

let elCampamento = {
    anio  : 2021,
    autor : "Blue Jeans",
    paginas: 480
};

let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
};

libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);

console.log("\nEjercicio 3(Array Libros): ")
console.log(libros);

function ejercicio3(libros) {
    libros.forEach(libro => {
        libro.epoca = libro.anio < 2020 ? "pre-pandemia" : "post-pandemia";
    });
}

ejercicio3(libros)
console.log("\nEjercicio 3(Array Libros con la propiedad época): ")
console.log(libros)
