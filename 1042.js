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
let [n1, n2, n3] = lines.shift().split(" ");
n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);
let maior, meio, menor;

maior = n1;
if(maior < n2)
{
    maior = n2;
}
if(maior < n3)
{
    maior = n3;
}


menor = n1;
if(menor > n2)
{
    menor = n2;
}
if( menor > n3)
{
    menor = n3;
}
//-------------------------


if(n1 > menor && n1 < maior)
{
    meio = n1;
}
if(n2 > menor && n2 < maior)
{
    meio = n2;
}
if( n3 > menor && n3 < maior)
{
    meio = n3;
}
console.log(menor);
console.log(meio);
console.log(maior);

console.log('')

console.log(n1);
console.log(n2);
console.log(n3);