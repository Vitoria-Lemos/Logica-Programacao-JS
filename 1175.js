const { Console } = require('console');
const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseInt(lines.shift());


//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");


let lines = conteudoArquivo.split(quebraLinhaWindows);
let n = []

for(let i = 0; i < 20; i++)
{
    n[i] = lines[i]
}

let aux = 0
let j = 19
for(let i = 0; i < 10; i++,j--)
{
     aux = n[j]
     n[j] = n[i]
     n[i] = aux
}

for(let i = 0; i < 20; i++)
{
   console.log(`N[${i}] = ${n[i]}`)
}