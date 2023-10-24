
let [peca1, n1, v1] = lines.shift().split(" "); 
let [peca2, n2, v2] = lines.shift().split(" ");
let pagar = Number(n1 * v1) + Number( n2 * v2);
console.log("VALOR A PAGAR: R$ "+pagar.toFixed(2));
