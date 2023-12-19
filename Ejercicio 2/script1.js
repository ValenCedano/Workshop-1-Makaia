/*
Considerando que 𝑎 = 4, 𝑏 =7, 𝑐 =2𝑏, 𝑥 =𝑎 , 𝑦=3𝑥, 𝑢=6, 𝑤 =10; crear 
un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
siguientes operaciones algebraica: 
a. 𝑎 / (𝑏𝑐 ) -> result1
b. 𝑎^2 +𝑏^92  -> result2
c. 𝑥+𝑦 /(𝑢+(𝑤/a)) -> result3
d. (𝑥/𝑦)(𝑧+𝑤) -> result4

*/

const a=4, b=7;
const c= 2*b , x=a,y= 3*x, u=6, w=10;

// La variable z es arbitraria. El usuario puede insertarlo

const z = Number(prompt("Inserte el valor de la variable z: "));
let result1, result2, result3, result4;

// Realizando operaciones
result1 = a / (b*c);
result2 = Math.pow(a,2) + Math.pow(b,92);
result3= x+y / (u + (w/a));
result4 = (x/y)*(z+w)

console.log("El resultado de la operación a / (bc) es: ", result1)
console.log("El resultado de la operación a^2 +b^92  es: ", result2)
console.log("El resultado de la operación x+y /(u+(w/a)) es: ", result3)
console.log("El resultado de la operación (x/y)(z+w) es: ", result4)
