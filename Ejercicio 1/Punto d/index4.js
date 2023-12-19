/*
Ejercicio 1. Punto d

Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente: 

i. Calcular su salario básico mensual 
ii. Determinar  si  recibe  o  no  subsidio  de  transportes.  Un  empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP 
iii. Mostrar  en  consola  el  nombre  del  empleado,  su  salario  básico 
mensual y si recibe o no subsidio de transporte
*/

// Leyendo los datos

const nombre = prompt("Por favor, ingrese nombre completo: ");
const salarioHoras = prompt("Por favor, ingrese el salario basico por horas: ");
const numeroHoras = prompt("Por favor, ingrese el número de horas trabajadas en un mes:");

//  Calculos

const salario = salarioHoras * numeroHoras;
const subsidio = Number(salario) < 700000 || Number(salario) == 700000;

// Imprimiendo en consola

console.log("Datos Importantes")
console.log("Nombre del empleado:", nombre);
console.log("Salario básico mensual:" + salario + " pesos colombianos");
console.log("El empleado recibe subsidio de transporte:", subsidio);







