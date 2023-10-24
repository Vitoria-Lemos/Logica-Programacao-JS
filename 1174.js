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
let array = []
let index = 0
let posicao = 0
for (let i =0; i < 100;i++)
{
    array[i] = lines[i]
}


for(let i = 0; i < 100;i++)
{
    if(array[i] <= 10)
    {
        console.log(`A[${i}] = ${Number(array[i]).toFixed(1)}`)

    }
}

