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
//let n = parseInt(lines.shift());


//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");

let n = parseInt(lines.shift());

for(let i = 0;i < n; i++)
{
    let[x,y] = lines.shift().split(" ");
    x = Number(x)
    y = Number(y)
    let soma = 0
    if(x % 2 == 0)
    {
        x = (x + 1)
    }
   for(let j = 1; j <= y ;j++)
   {
        soma += x
        x += 2
       
        
   }
   console.log(soma)
   soma = 0
}