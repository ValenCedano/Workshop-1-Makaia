/*Completar las siguientes tablas de verdad, resolviendo cada 
expresión lógica desde un algoritmo usando JavaScript y modificando los 
diferentes valores que toma las variables de proposición p y q:
*/

// Primera tabla de la verdad

let p,q;


p = true;
q = true;
console.log("\nPrimera tabla de la verdad\n");
console.log("---------------------------------")
console.log("p    |  q   | NOT p| NOT p AND q \t");
console.log(`${p} | ${q} | ${!p}| ${!p && q}`);
p = true;
q = false;
console.log(`${p} | ${q}| ${!p}| ${!p && q}`);
p = false;
q = true;
console.log(`${p}| ${q} | ${!p} | ${!p && q}`);
p = false;
q = false;
console.log(`${p}| ${q}| ${!p} | ${!p && q}`);

console.log("---------------------------------")

// Segunda Tabla de la verdad

console.log("\nSegunda tabla de la verdad\n");

p = true;
q = true;
console.log("-----------------------------------------------------")
console.log("p    | q    | NOT p | NOT q | NOT p AND NOT q |\t");
console.log(`${p} | ${q} | ${!p} | ${!q} |   ${!p && !q}         |`);
p = true;
q = false; 
console.log(`${p} | ${q}| ${!p} | ${!q}  |   ${!p && !q}         |`);
p = false;
q = true;
console.log(`${p}| ${q} | ${!p}  | ${!q} |   ${!p && !q}         |`);
p = false;
q = false;
console.log(`${p}| ${q}| ${!p}  | ${!q}  |   ${!p && !q}          |`);
console.log("-----------------------------------------------------")