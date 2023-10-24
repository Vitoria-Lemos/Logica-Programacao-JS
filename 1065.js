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

let n 
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
for(let i = 0; i < 5; i++)
{
    n = parseFloat(lines.shift());
    if(n % 2 == 0)
    {
        pares++;
    }
    if(n % 2 != 0)
    {
        impares++
    }
    if(n > 0)
    {
        positivos++
    }
    if(n < 0 )
    {
        negativos++
    }
}

console.log(pares+" valor(es) par(es)")
console.log(impares+" valor(es) impar(es)")
console.log(positivos+" valor(es) positivo(s)")
console.log(negativos+" valor(es) negativo(s)")


