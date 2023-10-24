const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseFloat(lines.shift());


//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [codigo, quantidade] = lines.shift().split(" ");
let total;
if ( codigo == 1)
{
    total = quantidade * 4;
}
if( codigo == 2)
{
    total = quantidade * 4.5;
}
if( codigo == 3)
{
    total = quantidade * 5
}
if( codigo == 4)
{
    total = quantidade * 2
}
if( codigo == 5)
{
    total = quantidade * 1.5
}

console.log("Total: R$ "+total.toFixed(2));

