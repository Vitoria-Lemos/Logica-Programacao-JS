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
//let n = parseInt(lines.shift());

while (1) {

    let [n1, n2] = lines.shift().split(" ");
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    if (n1 == n2) {
        break;
    }
    if (n1 > 0 || n2 > 0) {
        if (n1 > n2) {
            console.log("Decrescente")
        }
        else
        {
            console.log("Crescente")
        }


       
    }
    if (n1 < 0 && n2 < 0) {
        if (n1 > n2) {
            console.log("Decrescente")
        }
        else if (n1 < n2) {
            console.log("Crescente")
        }
        
    }




}