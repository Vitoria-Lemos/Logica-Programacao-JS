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
let n = parseInt(lines.shift());

for(let i = 0; i < n; i++)
{
    let[n1, n2, n3] = lines.shift().split(" ");
    n1 = parseFloat(n1) * 2
    n2 = parseFloat(n2) * 3
    n3 = parseFloat(n3) * 5
    let media = (n1 + n2 + n3) / 10
    console.log(media.toFixed(1))
}