//Ejercicio 6: Iguales a 10 pero menores de 1000
//Dada una matriz, recorrer sus valores y sumar solo los números que estén por
//encima o sean iguales a 10, pero menores que 1000.

let matriz = [5, 10, 20, 999, 1000, 3, 500]; // Ejemplo de matriz
let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] >= 10 && matriz[i] < 1000) {
        suma += matriz[i];
    }
}

console.log("La suma de los números mayores o iguales a 10 y menores que 1000 es: " + suma);
