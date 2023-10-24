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

let num =parseFloat(lines.shift());

if( num == 1)
{
    console.log('January')
}
if( num == 2)
{
    console.log('February')
}
if( num == 3)
{
    console.log('March')
}
if( num == 4)
{
    console.log('April ')
}
if( num == 5)
{
    console.log('May')
}
if( num == 6)
{
    console.log('June')
}
if( num == 7)
{
    console.log('July')
}
if( num == 8)
{
    console.log('August')
}
if( num == 9)
{
    console.log('September')
}
if( num == 10)
{
    console.log('October')
}
if( num == 11)
{
    console.log('November')
}
if( num == 12)
{
    console.log('December')
}
