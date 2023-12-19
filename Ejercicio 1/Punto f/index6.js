/*
El  aeropuerto  El  Dorado  se  encuentra  en  remodelación  y  requiere  un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales  para  nacionales  y  extranjeros.  Se  le  solicita  diseñar  este 
programa para que reciba el primer dígito de un número de pasaporte y 
que  muestre  el  valor  booleano  que  indique  si  el  turista  es  del  país  o 
extranjero.  Todos  los  No.  de  pasaporte  que  inicien  con  la  letra  A  son 
nacionales.

*/

//Solicitando datos
const digitoPasaporte =  prompt("Inserte el primer dígito del número de pasaporte: ");
const  origenTurista =  digitoPasaporte === 'A' || digitoPasaporte === 'a';

// Imprimiendo resultados
console.log("El turista es extranjero: ", !origenTurista);
console.log("El turista es del país: ", origenTurista);
