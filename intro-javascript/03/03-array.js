
const array = ['hola', 3.14, true];

// otra forma de crear arrays
const array2 = new Array('hola', 3.14, true);

console.log(array);
console.log(array2);

const numeros = [1, 35, 6, 54, 3, 3, 24];

// push agrega un elemento al final del array
numeros.push(65);

//Unshift agrega un elemento al incio del array
numeros.unshift(3);
console.log(numeros);
console.log(`El array numeros tiene ${numeros.length} elementos`);



// numeros.forEach((valor, subIndice) => imprimirValor(valor,subIndice) )

function imprimirValor(valor, subInidice) {
    console.log(`Array [${subInidice}] = ${valor}`);
}

// otra forma de llamarlo 
numeros.forEach(imprimirValor);

// buscar en el arreglo los valores mayores a 10

const mayoresA10 = numeros.filter(n => n >= 10);
console.log(mayoresA10);

// funcion tradicional
function saludo2() {
    console.log('Hola mundo');
}

// Arrow function 
const saludo = () => console.log('Hola mundo');

saludo();
saludo2();


// Objetos 

// Declaracion de objetos
let persona = new Object();

persona.nombre = 'Facu';
persona.apellido = 'Montenegro';

persona.nombreCompleto = function () {
    return this.nombre + ' ' + nombre.apellido;
}

// Otra forma (la que vamos a utilizar)

let persona2 = {
    nombre: 'Facu',
    apellido: 'Montenegro',
}

console.log(persona2);

// Convertir json a objetos y viceversa
let objetos = JSON.parse



JSON.stringify(objetos)








