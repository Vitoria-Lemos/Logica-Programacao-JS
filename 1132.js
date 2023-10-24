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

let n1 = parseInt(lines.shift());
let n2 = parseInt(lines.shift());
let soma  = 0
let maior = 0 , menor = 0
if(n1 > n2)
{
    maior= n1
    menor = n2
}
else
{
    maior = n2
    menor = n1
}

for(let i = menor  ; i <= maior; i++)
{
    if(i % 13 != 0)
    {
        soma+= i
    }
}
console.log(soma)