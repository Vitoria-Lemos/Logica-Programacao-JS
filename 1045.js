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
let [a, b,c] = lines.shift().split(" ");
a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)
let maior, meio, menor;

if(b > a && b > c)
{
    aux = a;
    a = b;
    b = aux;
}
if(c > a && c > b)
{
    aux = a;
    a = c;
    c = aux
}
if( c > b)
{
    aux = c
    c = b
    b = aux
     
}

if( (b+c) <= a)
{
    console.log("NAO FORMA TRIANGULO")
}
else
{
    if( (Math.pow(b,2) + Math.pow(c,2)) == Math.pow(a,2) )
    {
    console.log("TRIANGULO RETANGULO")
    }
    if((Math.pow(b,2) + Math.pow(c,2)) < Math.pow(a,2))
    {
    console.log("TRIANGULO OBTUSANGULO")
    }
    if((Math.pow(b,2) + Math.pow(c,2)) > Math.pow(a,2))
    {
    console.log("TRIANGULO ACUTANGULO")
    }
    if(a == b && c == a)
    {
    console.log("TRIANGULO EQUILATERO")
    }
    if(a == b && c != b || b == c && a != c)
    {
    console.log("TRIANGULO ISOSCELES")
    }
}

