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

let Njogadores = lines.shift()
let tentativas = [], acertos = []
let S = 0, B = 0,A = 0, totS1 = 0, totS2 = 0,totB1 = 0,totB2 = 0,totA1 = 0, totA2 = 0
let totS = 0
for(let i = 1;  i <= Njogadores;i++)
{
    let nome = lines.shift()
  
    tentativas = lines.shift().split(" ");
    acertos = lines.shift().split(" ");

    totS1 +=  parseFloat(tentativas[0])
    totS2 += parseFloat(acertos[0])

    totB1 += parseFloat(tentativas[1])
    totB2 += parseFloat(acertos[1])

    totA1 += parseFloat(tentativas[2])
    totA2 += parseFloat(acertos[2])

}

console.log(`Pontos de Saque: ${(((totS2/totS1))*100).toFixed(2)} %.`)
console.log(`Pontos de Bloqueio: ${((totB2/totB1)*100).toFixed(2)} %.`)
console.log(`Pontos de Ataque: ${((totA2/totA1)*100).toFixed(2)} %.`)
