const prompt = require("prompt-sync")({ sigint: true });

let numeros = [6, 5, 1, 2, 4, 3, 8, 7, 1, 4, 10, 2, 3, 0.5, -2];

// ordenamiento burbuja
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length-i-1; j++) {
        let aux
        if (numeros[j] > numeros[j+1]) {
            aux = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = aux
        }
    }
}

console.log(numeros)

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	},
    {
		nombre: "isa",
		apellido: "montoya",
		ocupacion: "cantante",
		estatura: 170
	}
];

for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length-i-1; j++) {
        let aux
        if (personas[j].estatura > personas[j+1].estatura) {
            aux = personas[j]
            personas[j] = personas[j+1]
            personas[j+1] = aux
        }
    }
}

console.log(personas)