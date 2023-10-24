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


let n =parseFloat(lines.shift());
let x, y;
let max = 0, min = 0
let soma = 0
for(let i = 0; i < n ;i++)
{
    let[x,y] = lines.shift().split(" ");
    x = parseInt(x)
    y = parseInt(y)
    if(x > y)
    {
        max = x
        min = y
    }
    else
    {
        max = y
        min = x
    }
    for(let j = (min + 1); j < max; j++)
    {
        if(j % 2!= 0)
        {
            soma = soma + j
        }
        
    }
    console.log(soma)
    soma = 0
}

