//Ejercicio 4: ¿Es par o impar?
//Consigna:
//Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un
//número y determine si es par o impar. Muestra un mensaje explicativo indicando qué
//significa cada caso

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
    console.log("El número es par. Los números pares se pueden dividir por 2 sin resto.");
} else {
    console.log("El número es impar. Los números impares no se pueden dividir por 2 sin resto.");
}
