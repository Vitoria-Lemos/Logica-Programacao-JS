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

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [horaInicial,minutoInicial,horaFinal,minutoFinal] = lines.shift().split(" ");
console.clear()
let s = parseFloat(lines.shift());
s = parseFloat(s);
let p, n, novo;
if( s > 0 && s <= 400)
{
    novo = s * 1.15
    p = 15
}
else if(s > 400 && s <= 800)
{
    novo  = s * 1.12
    p = 12
}
else if(s > 800 && s <= 1200)
{
    novo = s * 1.10
    p = 10
}
else if(s > 1200 && s <= 2000)
{
    novo = s * 1.07
    p = 7
}
else if( s > 2000)
{
    novo = s * 1.04
    p = 4
}

console.log(`Novo salario: ${novo.toFixed(2)}`)
console.log(`Reajuste ganho: ${(novo - s).toFixed(2)}`)
console.log(`Em percentual: ${p} %`)