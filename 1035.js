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
let [a, b, c, d] = lines.shift().split(" "); 

if ((b > c) && (d > a) && ((c + d) > (a + b)) && c > 0  && d >0 && a % 2 ==0)
{
    console.log("Valores aceitos")
}
else
{
    console.log("Valores nao aceitos")
}
