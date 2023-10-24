const { Console } = require('console');
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
//let[p1, p2, p3] = lines.shift().split(" ") 

let TipoCha = parseFloat(lines.shift());
let acertos = 0
let[r1,r2,r3,r4,r5] = lines.shift().split(" ") 

if(r1 == TipoCha)
{
    acertos++
}
if(r2 == TipoCha)
{
    acertos++
}

if(r3 == TipoCha)
{
    acertos++
}

if(r4 == TipoCha)
{
    acertos++
}

if(r5 == TipoCha)
{
    acertos++
}
console.log(acertos)