

let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
]//CIERRE DEL OBJETO

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                return this.clientes[i];
            }
        }
        return "No se encontró el titular de la cuenta";
    },//CIERRE DEL METODO

    deposito: function(titular, cantidadADepositar) {
        let cliente = this.consultarCliente(titular);
        if (cliente === "No se encontró el titular de la cuenta") {
            console.log(cliente);
        } else {
            cliente.saldoEnPesos += cantidadADepositar;
            console.log("Depósito realizado, su nuevo saldo es: " + parseInt(cliente.saldoEnPesos));
        }
    },//CIERRE DEL METODO

    extraccion: function(titular, montoExtraer){
        let cliente = this.consultarCliente(titular)
        if (cliente === "No se encontró el titular de la cuenta") {
            console.log(cliente);
        } else {
            cliente.saldoEnPesos -= montoExtraer;
            console.log("Retiro realizado, su nuevo saldo es: " + parseInt(cliente.saldoEnPesos));
        }
    }//CIERRE DEL METODO

}//CIERRE DEL OBJETO

let titular = prompt("Ingrese el nombre del titular: ")
let clienteEncontrado = banco.consultarCliente(titular)
console.log(clienteEncontrado)

titular = prompt("Ingrese el nombre del titular de la cuenta a la que quiere depositar el dinero: ")
let cantidadADepositar = parseInt(prompt("Ingrese la cantidad de dinero a depositar: "))
banco.deposito(titular, cantidadADepositar)

titular = prompt("Ingrese el nombre del titular de la cuenta de la que quiere retirar el dinero: ")
let montoExtraer = parseInt(prompt("Ingrese la cantidad de dinero a retirar: "))
banco.extraccion(titular, montoExtraer)

//PROPIEDAD UNICA
let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]
let string = prompt("Edad o nombre?: ");
let lowerCaseString = string.toLowerCase();
console.log(propiedadUnica(array,lowerCaseString))

function propiedadUnica(array, lowerCaseString){
    if(lowerCaseString=="edad"){
        array = [ { edad: 27 }, { edad: 49} ]
        return array
    }else if(lowerCaseString=="nombre"){
        array = [ { nombre: "Lean" }, { nombre: "Eze"} ]
        return array
    }else{
        return "no valido"
    }
}

//PROMEDIO ALUMNO
let nombre = prompt("Ingrese su nombre: ")
let numLegajo = prompt("Ingrese el numero de legajo: ")
let booleanNotas = false
let notas = []
let i=1

do{
    let nota = parseFloat(prompt("Ingrese la nota " + i + " : (1-10) "))
    notas.push(nota)
    let preg = prompt("Desea ingresar otra nota? (si o no): ")
    let preg1 = preg.toLowerCase()
    if(preg1==="no"){
        booleanNotas=true
    }
    i++

}while(!booleanNotas)

let alumno = {
    nombre: nombre,
    numeroLegajo: numLegajo,
    listaNotas: notas,
    promedioAlumno: function(){
        let sumaNotas=0
        for(let i=0; i<this.listaNotas.length; i++){
            sumaNotas += this.listaNotas[i]
        }
        let promedio = sumaNotas / this.listaNotas.length;
        return promedio;
    }
}

let promedio = alumno.promedioAlumno();
console.log("El promedio de " + alumno.nombre +  " con numero de legajo " + alumno.numeroLegajo + " es " + promedio);

if(promedio>7){
    console.log("El alumno ha aprobado")
}else{
    console.log("El alumno ha reprobado")
}