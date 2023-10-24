const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseFloat(lines.shift());


//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");

let num = parseFloat(lines.shift());
let valor = 0;
let tot = 0;
let resto = num

resto = parseFloat(num);
//Maior ou igual a 2000, isento
if (num >= 0 && num <= 2000) {
    console.log("Isento")
}
else if(num > 2000 && num <= 3000)
{
    valor = (num - 2000) * 0.08  
    console.log("R$ "+valor.toFixed(2))
}
else if(num > 3000 && num <= 4500)
{
    valor =  1000 * 0.08 + (num - 3000) * 0.18
    console.log("R$ "+valor.toFixed(2))
}
else if(num > 4500)
{
    valor = 1000 * 0.08 + (1500 * 0.18) + (num - 4500) * 0.28
    console.log("R$ "+valor.toFixed(2))
}

