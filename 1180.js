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
let n = parseInt(lines.shift());
let v = []
let posicao = 0
let menor = 0
v = lines.shift().split(" ");
//console.log(lines)

menor = v[0]
for(let i = 0; i < n;i++)
{
   if(v[i]  < menor)
   {
    menor = Number(v[i])
    posicao = i
   }
   
}
console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${posicao}`);