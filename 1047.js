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
console.clear()
let [horaInicial,minutoInicial,horaFinal,minutoFinal] = lines.shift().split(" ");
horaInicial = Number(horaInicial)
minutoInicial = Number(minutoInicial)
horaFinal = Number(horaFinal)
minutoFinal = Number(minutoFinal)
let duracaoInicial = (horaInicial * 60) + minutoInicial
let duracaoFinal = (horaFinal * 60) + minutoFinal

let duracao
if(duracaoInicial < duracaoFinal)
{
    duracao = duracaoFinal - duracaoInicial
}
else
{
    duracao = (24*60 - duracaoInicial) + duracaoFinal
}

let horas =parseInt(duracao / 60)
let minutos = parseInt(duracao%60)

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
