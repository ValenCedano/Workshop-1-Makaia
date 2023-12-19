/*
Hacer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal.
*/

const letra = prompt("Por favor, ingrese una letra del abecedario: ");
// Verificación
const vocal = (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') ;
// Imprimiendo

console.log("La letra suministrada es una vocal: ", vocal);