/*
Ejercicio 1. c Crear una fórmula para saber si un número es o no es un múltiplo de 2

*/

// Solicitud del dato
const Numero = prompt("Por favor, ingrese un número entero: ");

// Verificación de la condición
const multiplo2 = Number(Numero) % 2;
const verificacion = multiplo2 == 0;

// Imprimiendo el resultado

console.log("El número que insertó es un múltiplo de dos: ", verificacion);

