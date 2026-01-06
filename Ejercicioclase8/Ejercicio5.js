const prompt = require ('prompt-sync')();

//Pedimos al usuario que ingrese su nombre
let nombre = prompt ("¿Cómo te llamas?:");

//Mostramos el saludo personalizado
console.log("Hola, "+ nombre + "! ¿Que onda?. ");
