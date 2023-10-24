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
console.clear()
let [a, b, c] = lines.shift().split(" "); 
a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)
let delta = Math.pow(b,2) - 4*a*c
//console.log(Math.sqrt(delta).toFixed(0))
if(a === 0)
{
    console.log("Impossivel calcular")
}
else if (delta < 0)
{
    console.log("Impossivel calcular")
}
else
{
    let r1= ((- b + (Math.sqrt(delta))) / (2 * a))
    let r2 = Raiz2(a,b,delta)
    console.log("R1 = "+r1.toFixed(5))
    console.log("R2 = "+r2.toFixed(5))
}

function Raiz2(a,b,delta)
{
    let r2 = ((- b - (Math.sqrt(delta))) / (2 * a))
    return r2;
}



