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

let num =lines.shift();
if(num == 61)
{
    console.log(`Brasilia`)
}
else if(num == 71)
{
    console.log(`Salvador`)
}
else if(num == 11)
{
    console.log(`Sao Paulo`)
}
else if(num == 21)
{
    console.log(`Rio de Janeiro`)
}
else if(num == 32)
{
    console.log(`Juiz de Fora`)
}
else if(num == 19)
{
    console.log(`Campinas`)
}
else if(num == 27)
{
    console.log(`Vitoria`)
}
else if(num == 31)
{
    console.log(`Belo Horizonte`)
}
else 
{
    console.log(`DDD nao cadastrado`)
}