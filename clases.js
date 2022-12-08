

// CLASES EN JAVASCRIP 
class Persona {
    constructor(nombre, apellido, edad, telefono){
        try{
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.telefono = telefono;
        }catch(error){
            console.log(error);
        }
    }

}

// HERENCIA DE LAS CLASES

class Empleado extends Persona {
    constructor(nombre, apellido, edad, telefono, profesion, sueldo){
        super(nombre, apellido, edad, telefono);
        this.profesion = profesion;
        this.sueldo = sueldo;
    }
    mensualidad (){
        return (this.sueldo * 30);
    }
} 

var yennis = new Empleado('Yennis', 'Diaz', 18, 3215069904, 'Ingeniera', 300000);



// FUNCIONES CONSTRUCTORAS

function Auto(marca, modelo, placa){
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;

    this.carrera =  function carreras(numero){
        return (numero * 4);  
    }
}
Auto.prototype.getPropietario = function (propietario){
    this.propietario = propietario; 
    return `El propietario es ${this.propietario} dueño del auto ${this.marca}`;
}

let Renault = new Auto('Renault', 2007, 'KM4-8FJ');
// console.log(Renault.carrera(4));
// console.log(`El Auto ${Renault.marca} tiene un comparendo, con numero de placa ${Renault.placa} por el numero de carreras que son ${Renault.carrera(4)} excediendo el limite.`);

// console.log(Renault.getPropietario('sebastian'));


var objecto = {
    nombre: 'defecto',
    apellido: 'defecto',

    getEdad:  function getEdad(edad){
        this.edad = edad;
        return this.edad;
    }
}

let Jhon = Object.create(objecto);

// console.log(Jhon.getEdad(18))


// UTILIZANDO EL FOREACH PARA RECORRER LOS ARREGLOS

var arr = ['juan', 'pedro', 'milton', 'perez'];

// EL FOREACH SOLO PUEDE RECIBIR 3 PARAMETROS QUE SON LOS SIGUIENTE:
// 1- EL VALOR O NOMBRE 
// 2- LA MATRIZ O INDICE
// 3- EL ARRAY COMPLETO

arr.forEach((valor)=>{
    if(valor == 'milton'){
        // console.log(`${valor} al parecer hemos encontrado una coincidencia, por tal motivo no puedes acceder`)
    }
});


// UTILIZANDO MAP SIEMPRE RETORNA UN NUEVO ARRAY POR CADA RECORRIDO

var nuevo_array = arr.map((elemento)=>{
    if(elemento == 'pedro'){
        return `${elemento}  Alfonso`;
    }
    return elemento
})

// console.log(nuevo_array[2]);


// UTILIZANDO REDUCE PARA SUMAR LOS NUMERO DE LOS ARREGLOS 

var nums = [1, 2, 3, 4, 5];
var usuarios = ['juan', 'oscar', 'jose'];
var reduce = usuarios.reduce((acumulador, elemento)=>{
    return acumulador + elemento
})

// console.log(reduce);


var lenguajes = ['php', 'javascript', 'ruby', 'java', 'mysql y mongoDB'];
function string(strings){
    // CREAMOS UN NUEVO ARRAY CON LA CANTIDAD DE CARACTERES DE CADA ELEMENTO
    let numeroCaracteres = strings.map((elemento)=>{
     return elemento.length;
    })

    // TENIENDO EL NUEVO ARRAY CON LOS NUMEROS, OBRTENEMOS EL MAYOR NUMERO DE ESE ARRAY
    let max = Math.max(...numeroCaracteres);

    // RECORREMOS EL ARRAY QUE NOS DA LA FUNCION Y VALIDAMOS SI EL NUMERO DE CARACTERES DE ALGUN ELEMENTO ES IGUAL AL NUMERO MAYOR, ENTONCES RETORNAMOS ESE ELEMENTO...! 
    strings.forEach((elemento)=>{
        if(elemento.length == max){
            console.log(elemento);
        }
    })
}

function pruebaString(str){
    var masLarga = str[0];
    for(i=0; i<str.length; i++){
        if(str[i].length > masLarga.length){
            masLarga = str[i];
        }
    }
    console.log(masLarga)
}


