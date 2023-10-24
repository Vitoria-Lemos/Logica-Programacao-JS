const fileSystem = require('fs')
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseFloat(lines.shift());


//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [a, b] = lines.shift().split(" ");
a = parseInt(a)
b = parseInt(b)
if( a > b)
{
    if(a % b == 0 )
    {
        console.log("Sao Multiplos");
    }
    else
    {
        console.log("Nao sao Multiplos");
    }
}
else if( a < b)
{
    if(b % a == 0 )
    {
        console.log("Sao Multiplos");
    }
    else
    {
        console.log("Nao sao Multiplos");
    }

}

