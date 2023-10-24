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

let n = parseFloat(lines.shift());
let cubo = 0
let quadrado = 0
let concatenar = ""
let cont = 0

for (let i = 1; i <= n ; i++) {
    i = Number(i)
    if(i % 2 != 0)
    {
        console.log(i +" " + i*i +" "+ i*i*i)
        console.log((i) +" " +( (i*i) +1) + " "+ ((i*i*i) +1))
    }

    if(i % 2 == 0)
    {
        console.log(i +" " + i*i + " "+ i*i*i)
        console.log((i) +" " + ((i*i) +1) + " "+ ((i*i*i) +1))
    }
}