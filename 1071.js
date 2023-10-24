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

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let soma = 0
let min = 0, max = 0
if (x > y) {
    min = y
    max = x
}
else {
    max = y
    min = x
}
for (let i = (min +1); i < max; i++) {
    if(i % 2 != 0)
    {
        soma = soma + i
    }
}
console.log(soma)

