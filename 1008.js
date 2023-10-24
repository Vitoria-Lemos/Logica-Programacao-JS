let number = parseInt(lines.shift()); 
let h = parseInt(lines.shift()); 
let ValorH = parseFloat(lines.shift()); 
let salary  = h * ValorH;
console.log("NUMBER = "+number);
console.log("SALARY = U$ "+salary.toFixed(2))
