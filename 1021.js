const { REFUSED } = require('dns');
const fileSystem = require('fs')
const endereco = require('path');
const { compileFunction } = require('vm');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [x1, y1] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
console.clear()
let notas = parseFloat(lines.shift());
console.log("NOTAS: ")
resto = notas;
console.log(Math.floor(resto/100)+" nota(s) de R$ 100.00")
resto = resto % 100
console.log(Math.floor(resto/50)+" nota(s) de R$ 50.00")
resto = resto % 50
console.log(Math.floor(resto/20)+" nota(s) de R$ 20.00")
resto =  resto % 20;
console.log(Math.floor(resto/10)+" nota(s) de R$ 10.00")
resto = resto % 10
console.log(Math.floor(resto/5)+" nota(s) de R$ 5.00")
resto = resto % 5;
console.log(Math.floor(resto/2)+" nota(s) de R$ 2.00")
resto = resto % 2;
console.log("MOEDAS:")
resto = resto * 100
console.log((Math.floor(resto/100))+" moeda(s) de R$ 1.00")
resto =  resto % 100
console.log(Math.floor(resto/50)+" moeda(s) de R$ 0.50")
resto = resto % 50
console.log(Math.floor(resto / 25)+" moeda(s) de R$ 0.25")
resto =  resto % 25
console.log(Math.floor(resto/10)+" moeda(s) de R$ 0.10")
resto = resto % 10
console.log(Math.floor(resto/5)+ " moeda(s) de R$ 0.05")
resto =  resto % 5
console.log(Math.floor(resto/1)+" moeda(s) de R$ 0.01")

