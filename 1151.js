const { Console } = require('console');
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
//let[p1, p2, p3] = lines.shift().split(" ") 

let n = parseFloat(lines.shift());
let conquatenar = ""
let anterior1 = 0, anterior2 = 1
let atual = 0
conquatenar += anterior1 + " "

for (let i = 1; i < n; i++) {
    if (i == 1) {
        conquatenar += anterior2 + " "
    }
    else {
        atual = anterior1 + anterior2
        anterior1 = anterior2
        anterior2 = atual
        if (i == n - 1) {
            conquatenar += atual
        }
        else {
            conquatenar += atual + " "
        }
    }
}
console.log(conquatenar)