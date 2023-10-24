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

let tipo
let gasolina = 0
let alcool = 0
let diesel = 0

while(tipo != 4)
{
    tipo = parseFloat(lines.shift());
    while(tipo > 1 && tipo > 4)
    {
        tipo = parseFloat(lines.shift());
    }
    if(tipo == 1)
    {
        alcool++
    }
    else if(tipo == 2)
    {
        gasolina++
    }
    else if(tipo == 3)
    {
        diesel++
    }
    
}

console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)