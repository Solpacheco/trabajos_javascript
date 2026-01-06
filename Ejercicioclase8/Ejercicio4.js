const prompt = require ('prompt-sync')();

//Pedimos al usuario que ingrese un número entero
let numero = parseInt (prompt("Ingrese un número entero: "));

//Verificamos si es par o impar
if  (numero % 2 === 0 ){
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}