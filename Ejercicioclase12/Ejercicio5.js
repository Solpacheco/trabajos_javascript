//Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
//un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
//encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
//desarrollo)

const prompt = require('prompt-sync')(); // Importamos prompt-sync

let nombres = []; // Array vacío para guardar los nombres

// Paso 1: Pedimos 5 nombres y los guardamos en el array
for (let i = 0; i < 5; i++) {
    let nombre = prompt("Ingresa el nombre del estudiante " + (i + 1) + ":");
    nombres[i] = nombre;
}

// Paso 2: Pedimos un nombre para buscar
let nombreBuscar = prompt("Ingresa un nombre para verificar si está en la lista:");

// Paso 3: Verificamos si el nombre está en el array
if (nombres.includes(nombreBuscar)) {
    console.log(nombreBuscar + " se encuentra en la lista.");
} else {
    console.log(nombreBuscar + " NO se encuentra en la lista.");
}
