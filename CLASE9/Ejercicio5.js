//Escribe un programa que pida al usuario que ingrese tres números 
//Determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")();    
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));          

//Verificar cuál es el mayor
if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El primer número es el mayor:", numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El segundo número es el mayor:", numero2);
} else {
    console.log("El tercer número es el mayor:", numero3);
}       
