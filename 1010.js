const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [peca1, n1, v1] = lines.shift().split(" "); 
let [peca2, n2, v2] = lines.shift().split(" ");
let pagar = Number(n1 * v1) + Number( n2 * v2);
console.log("VALOR A PAGAR: R$ "+pagar.toFixed(2));