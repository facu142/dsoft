const { json } = require("stream/consumers");

class Persona {
    constructor(nombre, apellido, dni, fechaNacimiento) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fechaNacimiento = fechaNacimiento
    }
}

// Creando objetos persona
const persona1 = new Persona('Facu', 'Montenegro', 43603273, new Date(2002, 03, 29));
console.log(persona1);

const persona2 = {
    nombre: 'Facu2',
    apellido: 'Montenegro2',
    dni: 43603273,
    fechaNacimiento: new Date(2002, 03, 29),
}

console.log(persona2);

// Fetch api


// fetch('https://restcountries.com/v3.1/all')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             console.log(element.name.common);
//         });
//     });

// 


// Transformar string a objeto
let res = `{"marca": "fiat"}`;
let auto = JSON.parse(res);
console.log(auto);

