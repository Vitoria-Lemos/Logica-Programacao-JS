const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [x1, y1] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let n = parseInt(lines.shift());
let anos = n / 365;
let meses = (n % 365)/30;
let dias = (n % 365) % 30
console.log(Math.floor(anos)+" ano(s)")
console.log(Math.floor(meses)+" mes(es)")
console.log(dias+" dia(s)")
