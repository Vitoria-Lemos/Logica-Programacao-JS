const { Console } = require('console');
const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseInt(lines.shift());


//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");


let lines = conteudoArquivo.split(quebraLinhaWindows);
let par = []
let impar = []
let n
let qp = 0, qi = 0
for (let i = 0; i < 15; i++) {

    n = lines[i]
    if (n % 2 == 0) {
        par[qp] = n
        qp++
    }
    else{
        impar[qi] = n
        qi++
    }
    if (qp == 5) {
        for (let j = 0; j < 5; j++) {
            console.log(`par[${j}] = ${par[j]}`)
        }
        qp = 0
    }
    if (qi == 5) {
        for (let j = 0; j < 5; j++) {
            console.log(`impar[${j}] = ${impar[j]}`)
        }
        qi = 0
    }
}

for (let i = 0; i < qi; i++) {
    console.log(`impar[${i}] = ${impar[i]}`)
}
for (let i = 0; i < qp; i++) {
    console.log(`par[${i}] = ${par[i]}`)
}

