// Ejercicio 1. b
/* La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
un  descuento  del  50%  para  compras  mayores  o  iguales  a  los  $100.000 
COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
muestre en consola el valor booleano que indique si la compra recibe o no 
el descuento.
*/

// Solicitud del dato
const valorCompra = prompt("Por favor, ingrese el valor de su compra: ")

// Verificación de la condición
const valorCompra100000 = Number(valorCompra)>100000 || Number(valorCompra)==100000


console.log("El usuario recibe el descuento del 50 % para su compra: ", valorCompra100000)

