const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////



//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseInt(lines.shift());

let i = 1, j = 7, cont = 0
for(let k = 0; k < 5; k++)
{ 
    for(let l = 0; l< 3; l++ )
    {
        console.log("I="+i , "J="+j)
        j-=1
       
    }
    i += 2
    j = 7
    
}