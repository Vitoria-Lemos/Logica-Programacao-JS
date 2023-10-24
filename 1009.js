let nome = lines.shift();
let salary = Number(lines.shift());
let totalVendas = Number(lines.shift());
let comissao = totalVendas * 0.15;
let NewSalary = salary + comissao;
console.log("TOTAL = R$ "+NewSalary.toFixed(2))
