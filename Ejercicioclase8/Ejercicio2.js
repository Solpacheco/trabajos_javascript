const prompt = require ('prompt-sync')();

//Pedimos al usuario que ingrese un número cualquiera
let numero = parseFloat (prompt("Ingrese un número: "));

//Verificamos si el número es positivo, negativo o cero
if (numero > 0) 
    console.log("El número es positivo.");