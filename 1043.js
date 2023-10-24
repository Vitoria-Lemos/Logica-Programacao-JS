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
let [a, b, c] = lines.shift().split(" ");
a =parseFloat(a);
b =parseFloat(b);
c =parseFloat(c);
if( (b + c ) > a && (a + c) > b && (a + b) > c )
{
    console.log("Perimetro = " +(a + b + c).toFixed(1))
}
else
{
    let area = ((a + b) * c) /2;
    console.log("Area = "+area.toFixed(1))
}

