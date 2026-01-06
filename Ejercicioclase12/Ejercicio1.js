//Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números continuamente hasta
//que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
//números ingresados.

const prompt = require("prompt-sync")();

let suma = 0; // Aquí guardamos la suma de los números
let numero = 0; // Variable para guardar el número ingresado

while (numero >= 0) {
    numero = parseFloat(prompt("Ingresa un número (negativo para terminar):"));
    if (numero >= 0) {
        suma += numero; // Sumamos solo si no es negativo
    }
}

console.log("La suma de todos los números ingresados es: " + suma);
