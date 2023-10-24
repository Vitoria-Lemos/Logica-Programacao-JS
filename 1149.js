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
let a, n
let entrada
let soma = 0
entrada = lines.shift().split(" ")
a = Number(entrada.shift())
n = Number(entrada.shift())
while(1)
{
    if(n < 0 || n == 0)
    {
        n = Number(entrada.shift())

    }
    if(n > 0)
    {
        break
    }
    
}

for(let i = 0; i < n;i++)
{
    soma += a+i
}

console.log(soma)
