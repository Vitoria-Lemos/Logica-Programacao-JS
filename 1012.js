const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let r = Number(lines.shift());

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [a, b, c] = lines.shift().split(" "); 
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

triangulo(a,c)
circulo(c)
trapezio(a,b,c)
quadrado(b)
retangulo(a,b)
function triangulo(a,c)
{
    let area =  (a * c)/2;
    console.log("TRIANGULO: "+area.toFixed(3))
}

function circulo (c)
{
    let area = c*c*3.14159;
    console.log("CIRCULO: "+area.toFixed(3))
}

function trapezio (a,b,c)
{
    let area = (a + b)*c / 2
    console.log("TRAPEZIO: "+area.toFixed(3))
}

function quadrado(b)
{
    let area = b * b;
    console.log("QUADRADO: "+area.toFixed(3))
}
function retangulo(a,b)
{
    let area =  a*b;
    console.log("RETANGULO: "+area.toFixed(3))
}