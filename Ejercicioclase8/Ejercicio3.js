const prompt = require ('prompt-sync')();

//Pedimos al usuario que ingrese dos números
let primerNum = parseFloat(prompt("Ingrese el primer número: "));
let segundoNum = parseFloat(prompt("Ingrese el segundo número: "));

//Calculo de la suma de ambos números
let suma = primerNum + segundoNum;

//Mostrar el resultado de la suma en la consola
console.log("La suma de los números es: " + suma);


